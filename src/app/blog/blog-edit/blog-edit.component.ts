
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { BlogService } from './../blog.service';
import { Artical } from './blog.module';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})


export class BlogEditComponent implements OnInit, OnDestroy {
  title: String;
  content: string;
  date: String;
  blogid: string;

  articalForm = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
    data: new FormControl(),
    blogid: new FormControl()
  });

  formcontrols = this.articalForm.controls;

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService,
    private fire: AngularFirestore, private postService: BlogService) { }

  id: number;
  editMode = false;
  art: Artical;
  @Input() articals: {title: string, id: number, content: string, Published: string, img: string };


  private currentDate = new Date();

  articlesArray: Artical[];

  private subscription: Subscription;

  ngOnInit() {
    this.resetForm();
    this.subscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];  // +convert to string
        // this.editMode = params['id'] != null; // when ever the router parameter change call this method
        this.initForm();
      }
    );


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditArtical() {
    this.router.navigate(['edit'], {relativeTo: this.route} );
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route} ); //more complex way
  }

  private initForm() {

    // if (this.editMode) {
    //   this.blogService.getBlogDetails(this.id);
    // }

    this.articalForm = new FormGroup({
      'title': new FormControl(this.title, Validators.required), // assign values
      'content': new FormControl(this.content, Validators.required), // assign values
      'date': new FormControl(this.blogid, Validators.required), // assign values
    });
  }


  resetForm(form?: NgForm) {
    if (form != null) {form.resetForm(); } else {
      this.blogService.articalData = {
        title: '',
        date: '',
        Content: '',
        Author: ''
      };
    }
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newartical = new Artical( value.title, value.published, value.Content, value.img );
    console.log(newartical);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    const newartical = new Artical(
    // this.articalForm.value['id'],
    this.articalForm.value['title'],
    this.getCurrentDateInApiFormat(),
    this.articalForm.value['content'],
    localStorage.getItem('email'),
    );

    console.log(newartical);
    this.blogService.addArtical(newartical);

    // if (this.editMode) {
    //   console.log('this runs edit' + this.id);
    //   this.blogService.updateArtical(this.id, newartical);
    //   console.log(this.blogService.newdata);
    // } else {
    //   this.blogService.addArtical(newartical);
    // }
  }

  getCurrentDateInApiFormat(): string{
    let day:any = this.currentDate.getDate();
    let month:any = this.currentDate.getMonth() + 1;
    let year:any = this.currentDate.getFullYear();
    let dateInApiFormat: string;

    if(day<10){
       day = '0' + day.toString();
    }
    if(month<10){
        month = '0' + month.toString();
    }
    dateInApiFormat = day + '-' + month + '-' + year.toString();
    return dateInApiFormat;
}

}
