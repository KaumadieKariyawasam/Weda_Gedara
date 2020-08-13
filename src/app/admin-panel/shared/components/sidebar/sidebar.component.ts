import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
    let adminemail: string;
    adminemail= localStorage.getItem('adminemail');

   }

  ngOnInit() {
  }

}
