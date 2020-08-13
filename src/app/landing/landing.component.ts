import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  results: any;
  filteredNames: any[] = [];
  filters ={}

  constructor(private afs: AngularFirestore) { }

  ngOnInit(){
    this.afs.collection('test',ref => ref.limit(4)).valueChanges().subscribe(results => {
    this.results = results;
    this.applyFilters()
    })
  }

  private applyFilters(){
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

}
