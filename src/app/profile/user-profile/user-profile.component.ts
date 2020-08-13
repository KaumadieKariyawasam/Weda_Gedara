import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { switchMap, map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/signup/user.module';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private afa: AngularFirestore, private router: Router, private http: Http) { }
    user: User;
  ngOnInit() {
  }


  getUserProfile() {  // get the users details
    return this.afAuth.authState.pipe(
        switchMap(user => {
            if (user) {
                return this.afa.collection('users').doc(user.uid).get();
            }
            return of(null);
        }),
        map((snapshot) => {
            if (snapshot) {
                return snapshot.data() as User;
            }
            return null;
        }),
    );
}

}
