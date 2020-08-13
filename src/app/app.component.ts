import { ServerService } from './server.service';
import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import * as firebase from 'firebase';

let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = 0;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    showHeader: boolean;

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {
        router.events.forEach((event) => {
            if(event instanceof NavigationStart) {
                // this.showHeader = event.url !== "/default";
                // this.showHeader = event.url !== "/default/doctors";
                if (event.url !== "/default" && event.url !== "/default/doctors" && event.url !== "/default/medlist" && event.url !== "/default/spalist" && event.url !== "/default/userlist" )
                    {
                        this.showHeader = true;
                    } else {
                        this.showHeader = false;
                    }
            }
          });
    }
    @HostListener('window:scroll', ['$event'])
    hasScrolled() {

        const st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        const navbar = document.getElementsByTagName('nav')[0];

        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        } else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }

        lastScrollTop = st;
    }

    ngOnInit() {
    //   var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    //   this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //       if (window.outerWidth > 991) {
    //           window.document.children[0].scrollTop = 0;
    //       }else{
    //           window.document.activeElement.scrollTop = 0;
    //       }
    //       this.renderer.listenGlobal('window', 'scroll', (event) => {
    //           const number = window.scrollY;
    //           if (number > 150 || window.pageYOffset > 150) {
    //               // add logic
    //               navbar.classList.add('headroom--not-top');
    //           } else {
    //               // remove logic
    //               navbar.classList.remove('headroom--not-top');
    //           }
    //       });
    //   });
    //   this.hasScrolled();
        firebase.initializeApp ({
            apiKey: 'AIzaSyBrmoNwjKpAgtJ9iHeM8TiiybzDkObJpJQ',
            authDomain: 'test123-ae77c.firebaseapp.com',
        });
    }
}
