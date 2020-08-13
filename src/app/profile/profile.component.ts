import { Subscription } from 'rxjs/Subscription';
import { User } from './../signup/user.module';
import { AuthService } from './../signup/auth.service';
import { Area } from './areas.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Profile } from './profile.model';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit, OnDestroy {
  message = '';
  userArray: User[];
  user: User;

  

  constructor(public auth: AuthService, private rout: ActivatedRoute,private afa: AngularFirestore,private router: Router) { }

  userProfileSubscription: Subscription;

  ngOnInit() {

    this.userProfileSubscription = this.auth.getUserProfile().subscribe(user => {
      this.user = user;
    });


    this.auth.getUsers().subscribe(actionArray => {
      this.userArray = actionArray.map(user => {
        return {
          id: user.payload.doc.id,
          ...user.payload.doc.data()
        } as User; // casting into a post type
      });
    });
  }

  ngOnDestroy() {
    this.userProfileSubscription.unsubscribe(); // to stop data leakage
  }

  onDelete(num: string){
    const docRef = this.afa.collection('users').doc(num);
    docRef.delete().then(
      () =>  {alert('User is Deleted');
        this.router.navigate(['/landing']);
    }
    )
  }
}
