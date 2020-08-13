import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

export interface EditArtical {
  Content: String;
  title: string;
  date: String;
  Author: string;
}

@Component({
  selector: 'app-blogupdate',
  templateUrl: './blogupdate.component.html',
  styleUrls: ['./blogupdate.component.css']
})


export class BlogupdateComponent implements OnInit {

  Content: String;
  title: string;
  date: String;
  Author: string;

  id: string;

  form = new FormGroup({
    Content: new FormControl(this.Content,Validators.required),
    title: new FormControl(this.title,Validators.required),
    Author: new FormControl(this.Author,Validators.required),
    date: new FormControl(this.date,Validators.required),
  });

  FormControls = this.form.controls;

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService,
    private afs: AngularFirestore) {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        });

      this.afs.doc<EditArtical>('posts/' + this.id ).valueChanges().subscribe(
        res => {
          console.log('result ' + res);
          this.Author = res.Author;
          console.log('author ' + this.Author);
          this.Content = res.Content;
          this.date = res.date;
          this.title = res.title;
        });

        console.log('blog id ' + this.id);
        console.log('blog ' + this.title);

     }

  ngOnInit() {
  }

  onCancel() {
     this.router.navigate(['/doctor-profile']);
  }



  onSubmit() {

    if (this.form.value.Content == null) {
      this.form.value.Content = this.Content;
    }
   if (this.form.value.date == null) {
     this.form.value.date = this.date;
   }
   if (this.form.value.title == null) {
     this.form.value.title = this.title;
   }
   if (this.form.value.Author == null) {
    this.form.value.Author = this.Author;
  }


     console.log('update functin' + this.form.value);

    this.update(this.form.value);
   }


   update(spa1){
    console.log('updates' );
    this.afs.doc('posts/' + this.id ).update(spa1).then(
      () => {window.alert('Update successful'); }
      ).then(
      () => {this.router.navigate(['/doctor-profile']); }
      );
    console.log(spa1.email);
  }

}
