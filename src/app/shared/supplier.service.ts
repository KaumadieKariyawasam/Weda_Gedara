import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';


import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  email1:string;
  suceess:boolean;
  
  constructor(private afs:AngularFirestore, private afa:AngularFireAuth,private router: Router) { 
    login:false;
  }
  login:boolean;
  
  signup(email: string, password: string) {
    this.afa.auth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.router.navigate(['/supplier-log'])
    });
    
  }

  logInConfirm(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log("confirmed");
      var user = this.afa.auth.currentUser;
      console.log(user);
      user.delete();
    }).catch(err => {
      alert('Incorrect password or Username');
      });
  }

  logIn(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email,password).then(res=>{
      this.email1=email;
      localStorage.setItem('email', email);
      console.log('variable email'+this.email1);
      this.router.navigate(['/supplier-view'])
    }).catch(err => {
      console.log('Something is wrong:',err.message);
      alert('Incorrect password or Username');
      this.login=false;
      });   
  }

  deleteAccount(email: string) {
    //  console.log("This is delete function on service");
      this.afs.collection('supplier').doc(email).delete().then(res=>{
      //  console.log("This is delete function on service");
        alert("Account Deleted.. you can't next time logIn with this account.");
        this.router.navigateByUrl('/supplier-reg');
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    }



  loadData(){
    console.log('load data is work');

   return this.afs.collection("supplier").doc(this.email1).snapshotChanges();
 
}


getAllsupplier(){
  return this.afs.collection("supplier").valueChanges(); 
}
  
 

   create(supplier) {
       
    try{


    this.afs.collection('supplier').doc(supplier.email).set(supplier).then();
      }catch(error){
      alert(error);
    }
  }

  
  update(supplier){
    console.log("updates");
    this.afs.doc('supplier/'+supplier.email).update(supplier).then(
      res=>{
        console.log(supplier.telephone);
      console.log(supplier.email);
      alert("Updated..");
      this.router.navigateByUrl('/supplier-view');
      }
    );
   
    console.log(supplier.telephone);
    console.log(supplier.email);
  
  }

}
