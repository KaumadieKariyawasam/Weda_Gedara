import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from "@angular/forms";
import {SpaService} from "../../shared/spa.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-spa-article',
  templateUrl: './spa-article.component.html',
  styleUrls: ['./spa-article.component.css']
})
export class SpaArticleComponent implements OnInit {
  article=[]=[];
  form=new FormGroup({
   article:new FormControl(''),
    email:new FormControl(''),
    random:new FormControl('')
  }); 
  formControls=this.form.controls;

  constructor(private spaService:SpaService, private router:Router) { 
    this.form.value.email=localStorage.getItem('spa_email');
    this.spaService.getDocument(this.form.value.email).subscribe(result=>{
      this.article=result;
    });
  }

  ngOnInit() {
  }


  createArticle(){
    this.form.value.random=Math.random().toString(36).substring(2);
    this.form.value.email=localStorage.getItem('spa_email');
    this.spaService.createArticle(this.form.value);
    
  }
  delete(random:string){
    console.log("typesript",random);
   this.spaService.deleteArticle(random);
  }
  update(random:string){
    //this.spaService.deleteArticle(this.form.value);
    this.form.value.random=random;
    this.form.value.email=localStorage.getItem('spa_email');
    console.log("ts random",random);
    this.spaService.updateArticle(this.form.value);
  }

  goView(){
    this.router.navigateByUrl('/spa-view');
  }

}
