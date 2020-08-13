import { AuthService } from './../../signup/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    login: any;

    constructor(public location: Location, private router: Router, public auth: AuthService,private afAuth: AngularFireAuth,) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url !== this.lastPoppedUrl) {
               this.yScrollStack.push(window.scrollY);
           }
        } else if (event instanceof NavigationEnd) {
           if (event.url === this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
            } else {
               window.scrollTo(0, 0);
            }
       }
     });
     this.location.subscribe((ev: PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });

    }

    isHome() {
        const title = this.location.prepareExternalUrl(this.location.path());

        if ( title === '#/home' ) {
            return true;
        } else {
            return false;
        }
    }
    isDocumentation() {
        const title = this.location.prepareExternalUrl(this.location.path());
        if ( title === '#/documentation' ) {
            return true;
        } else {
            return false;
        }
    }

    onLogOut() {
        this.afAuth.auth.signOut();
        localStorage.removeItem('email');
        localStorage.clear();
        alert('you have Logout');
        this.router.navigate(['/landing']);
    }

    
}
