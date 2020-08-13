import { ArticalNew } from './../../blog/blog-edit/blognew.module';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { switchMap, map, take } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { Doctor } from './../../signup/doctor-signup/doctor';
import { BlogService } from 'src/app/blog/blog.service';
import { Artical } from 'src/app/blog/blog-edit/blog.module';
import { AuthService } from 'src/app/signup/auth.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

    ArticalArray: ArticalNew[];
    articles: Artical[];
    id: string;
    results: any;
    doctorArray: Doctor[];
  totalarticalCount: number;


  constructor(private afAuth: AngularFireAuth, private afa: AngularFirestore, private router: Router, private http: Http,
    private route: ActivatedRoute, private postService: BlogService,public auth: AuthService) { }
  doctor: Doctor;
  doctorProfileSubscription: Subscription;

  form=new FormGroup({
   
    password:new FormControl(),
    image: new FormControl(),
    email:new FormControl()

  }); 
  formControl=this.form.controls;


  ngOnInit() {
      this.id = localStorage.getItem('email');
      console.log(this.id);
      // this.afa.collection('posts', ref => ref.where("Author","==",this.id)).valueChanges().subscribe(results => {
      //     this.results = results;
      //     console.log('get id' + this.results);
      // });

      this.auth.getArticals(this.id).subscribe(actionArray => {
        this.ArticalArray = actionArray.map(user => {
          return {
            id: user.payload.doc.id,
            ...user.payload.doc.data()
          } as ArticalNew; // casting into a post type
        });
        this.totalarticalCount = this.ArticalArray.length;
      }

      );
      this.doctorProfileSubscription = this.auth.getDoctorProfile().subscribe(user => {
        this.doctor = user;
        console.log(this.doctor);
      });

      this.auth.getDoctors().subscribe(actionArray => {
        this.doctorArray = actionArray.map(user => {
          return {
            id: user.payload.doc.id,
            ...user.payload.doc.data()
          } as Doctor; // casting into a post type
        });
      });
  }

  getDoctorProfile() {  // get the doctors details
    return this.afAuth.authState.pipe(
        switchMap(doctor => {
            if (doctor) {
                console.log('doctor uid' + doctor);
                return this.afa.collection('doctors').doc(doctor.uid).get();
            }
            return of(null);
        }),
        map((snapshot) => {
            if (snapshot) {
                return snapshot.data() as Doctor;
            }
            return null;
        }),
    );
}



onNewArtical() {
    this.router.navigate(['new'], {relativeTo: this.route});
}

deleteBlog(id:string) {
  if(confirm("Are you sure, you want to delete this record?")){
    return this.afa.collection("posts").doc(id).delete();
  }
}

onDelete(id: string){
  console.log('confirmed');
  this.auth.Signin(this.form.value.email,this.form.value.password);
  this.deleteAccount(id);
}



deleteAccount(id: string) {
  console.log("This is delete function on service");
  this.afa.collection('doctors').doc(id).delete().then(res=>{
    console.log("This is delete function on service");
    alert("Account Deleted.. you can't next time logIn with this account.");
    this.router.navigateByUrl('/register/doctor');
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

}
