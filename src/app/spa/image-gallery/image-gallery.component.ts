import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireStorage} from '@angular/fire/storage';
import {SpaService} from '../../shared/spa.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  gallery=[]=[];

  form=new FormGroup({
    email:new FormControl(''),
    image:new FormControl(''),
    random:new FormControl('')
  });
  formControls=this.form.controls;
  
  
  constructor(private afst:AngularFireStorage,private spaService:SpaService,private router:Router) { 
    this.form.value.email=localStorage.getItem('spa_email');
    this.spaService.getGallery(this.form.value.email).subscribe(result=>{
      this.gallery=result;
    });

    
   
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.randomId);
    this.download=this.afst.ref("/gallery/"+this.randomId).getDownloadURL().subscribe(a=>{
      this.download=a;
      console.log("download",this.download);
     // console.log("email",this.email);
      this.form.value.random=Math.random().toString(36).substring(2);
      this.form.value.image=""+this.download;
      this.form.value.email=localStorage.getItem('spa_email');
      this.spaService.addImages(this.form.value);
      
    });
    
    
  }

  randomId;
  download;
  upload(event){
    this.randomId=Math.random().toString(36).substring(2);
    console.log("ran",this.randomId);
    this.afst.upload("/gallery/"+this.randomId,event.target.files[0]);
    console.log("add image");

  }
  onDelete(gal:string){
    //this.form.setValue(gal);
    this.spaService.deleteImage(gal);
    console.log(gal);
  }

  goView(){
    this.router.navigateByUrl('/spa-update');
  }
 
}
