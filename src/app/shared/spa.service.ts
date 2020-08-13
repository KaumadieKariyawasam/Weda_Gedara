import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';
//import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import { from } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})

export class SpaService {
  
  email1:string;
  spaname;
  suceess:boolean;
  image;
  
  constructor(private afs:AngularFirestore, private afa:AngularFireAuth,private router: Router) { 
    login:false;
  }
  login:boolean;
  
  signup(email: string, password: string) {
    this.afa.auth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert("Successfully signIn");
      this.router.navigateByUrl('/spa-log');
    });

   
  }
  logInConfirm(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log("confirmed");

    }).catch(err => {
      alert('Incorrect password or Username');
      });
  }

  logIn(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email,password).then(res=>{
      this.router.navigateByUrl('/spa-view');

    }).catch(err => {
      console.log('Something is wrong:',err.message);
      this.login=false;
      alert('Incorrect password or Username. .login Failed.. Retry');
      });
      
      
  }

  deleteAccount(email: string) {
  //  console.log("This is delete function on service");
    this.afs.collection('spa1').doc(email).delete().then(res=>{
    //  console.log("This is delete function on service");
      alert("Account Deleted.. you can't next time logIn with this account.");
      this.router.navigateByUrl('/spa-reg');
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
  

  loadData(){
    console.log('load data is work');

   return this.afs.collection("spa1").doc(this.email1).snapshotChanges();
 
}


getGallery(email: String) {
  try {
    return this.afs.collection('gallery',res=>res.where('email','==',email)).valueChanges({idField:"id"});
  } catch (error) {
    alert(error);
  }
}
getDocument(email: String) {
  try {
    return this.afs.collection('spaArticle',res=>res.where('email','==',email)).valueChanges({idField:"id"});
  } catch (error) {
    alert(error);
  }
}

getAllspa(){
  return this.afs.collection("spa1").valueChanges(); 
}
  
 

   create(spa1) {
       
    try{


      this.afs.collection('spa1').doc(spa1.email).set(spa1).then(res=>{
        this.router.navigateByUrl('/spa-log');
        console.log('Spa-log go into navigate');
      }
       
      );
     
    }catch(error){
      alert(error);
    }
  }
  createDoc(spaDoc) {
    this.afs.collection('spa-doc').add(spaDoc).then(res=>{
      console.log("added doc");
    });
  }
  
  
  update(spa1){
    console.log("updates");
    this.afs.doc('spa1/'+spa1.email).update(spa1).then(res=>{
      console.log(spa1.telephone);
    console.log(spa1.email);
    alert("Updated..");
    this.router.navigateByUrl('/spa-view');
    });
   
  }
  updateArticle(article) {
    try {
      this.afs.doc('spaArticle/'+article.random).update(article).then(res=>{
        alert("Updated..");
      });
      
    } catch (error) {
      alert(error);
    }
  }
  viewDoc(spaname: any) {
    this.router.navigateByUrl('/spa-doc');
    this.spaname=spaname;
  }

  addImages(gallery) {    
    try{
      //spa1.email="abc12#@gmail.com";
      this.afs.collection('gallery').doc(gallery.random).set(gallery).then(res=>{
        alert("Added Successfully");
      });
   }catch(error){
      alert(error);
    }
    
  }

  deleteImage(gal: string) {
    this.afs.collection('gallery').doc(gal).delete().then(res=>{
        alert("Deleted.. ");
       // this.router.navigateByUrl('/spa-reg');
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

  deleteArticle(random: string) {
    try {
      console.log("service random",random);
      this.afs.collection('spaArticle').doc(random).delete().then(res=>{
        alert("Deleted..");
      });
      
    } catch (error) {
      alert(error);
      
    }
  }
 

  createArticle(article) {
    try{ 
      console.log(article.email);
      this.afs.collection('spaArticle').doc(article.random).set(article).then(res=>{
      alert("Added successfully");
      this.router.navigateByUrl('/spa-article');
     });
     
    }catch(error){
      alert(error);
    }
  }
 
  routingLogin() {
    this.router.navigateByUrl('/spa-reg');
  }
  
}
  

