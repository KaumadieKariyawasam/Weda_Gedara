import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, merge } from 'rxjs';
import { User } from './user.module';
import { SpaOwner } from './spa-owner-signup/spa-owner';
import { Doctor } from './doctor-signup/doctor';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, map, take } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$: Observable<any>;
    checkauth: Observable<any>;

    tk: string;

    constructor(private afAuth: AngularFireAuth, private afa: AngularFirestore, private router: Router, private http: Http) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afa.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );

        this.user$.subscribe(user => console.log('user is', user));

    }

    Signup(email: string, pwd: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, pwd);
    }

    // signinUser(email: string, pwd: string) {
    //     return this.afAuth.auth.signInWithEmailAndPassword(email, pwd)
    //         .then(
    //             response => {
    //                 console.log(response.user.displayName);
    //                 firebase.auth().currentUser.getIdToken()
    //                 .then(
    //                     (token: string) => this.tk = token
    //                 );
    //             }
    //         )
    //         .catch(
    //             error => console.log(error)
    //         );
    // }

    Signin(email: string, pwd: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, pwd);
    }

    pwdReset(email: string) {
        this.afAuth.auth.sendPasswordResetEmail(email)
            .catch(
                error => console.log(error)
            );

        this.afAuth.auth.verifyPasswordResetCode(email)
            .catch(
                error => console.log(error)
            );

        // this.afAuth.auth.confirmPasswordReset(email, newpwd)
        // .catch(
        //     error => console.log(error)
        // );
    }


    UpdateUserData(user: User) { // updating the collection
        const userRef: AngularFirestoreDocument<User> = this.afa.doc(`users/${user.id}`);

        const data: User = {
            // img: user.img,
            id: user.id,
            email: user.email,
            DisplayName: user.DisplayName,
            // PhotoURL: user.PhotoURL,
            gender: user.gender,
            nic: user.nic,
            area: user.area,
            address: user.address,
        };

        return userRef.set(data, { merge: true });
    }

    UpdateDoctorData(user: Doctor) { // updating the collection
        const userRef: AngularFirestoreDocument<Doctor> = this.afa.doc(`doctors/${user.id}`);

        const data: Doctor = {
            // img: user.img,
            id: user.id,
            email: user.email,
            DisplayName: user.DisplayName,
            // PhotoURL: user.PhotoURL,
            gender: user.gender,
            nic: user.nic,
            area: user.area,
            address: user.address,
            telphoneNumber: user.telphoneNumber
        };

        return userRef.set(data, { merge: true });
    }

    UpdateSpaownerData(user: SpaOwner) {// updating the collection
        const userRef: AngularFirestoreDocument<SpaOwner> = this.afa.doc(`spa/${user.id}`);

        const data: SpaOwner = {
            img: user.img,
            id: user.id,
            email: user.email,
            DisplayName: user.DisplayName,
            nic: user.nic,
            area: user.area,
            reg_number: user.reg_number,
            Spa_location: user.Spa_location
        };

        return userRef.set(data, { merge: true });
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

    getDoctorProfile() { 
        return this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afa.collection('doctors').doc(user.uid).get();
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

    async Signout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('eq_user');
        localStorage.clear();
        return this.router.navigate(['/']);
    }

    // signOut() {
    //     this.afAuth.auth.signOut()
    //     .catch(
    //         error => console.log(error)
    //     );
    // }

    getToken() {
        return firebase.auth().currentUser.getIdToken();
    }

    getUsers() {
        return this.afa.collection('users').snapshotChanges();
    }

    getDoctors() {
        return this.afa.collection('doctors').snapshotChanges();
    }

    getArticals(id) {
        return this.afa.collection('posts', ref => ref.where('Author', '==', id)).snapshotChanges();
    }

    getAuth() { // this is for forget password function
        return this.afAuth.auth;
    }

    resetPasswordInit(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email, { url: 'http://localhost:4200/auth' });
    }

    isAuthenticated() {
        return this.tk != null;
        console.log('Logged in');
    }

    logout() {
        firebase.auth().signOut();
        this.tk = null;
        console.log('Loged Out');
    }

}
