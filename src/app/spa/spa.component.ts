import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  spaname: string;
  area: string;

  query: string;

  filters ={}

  constructor(private afs: AngularFirestore){

  }

  //.orderBy('name')
  ngOnInit(){
    this.afs.collection('spa1',ref => ref.limit(10)).valueChanges().subscribe(results => {
    this.results = results;
    this.applyFilters()
    })
  }

  private applyFilters(){
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string){
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }
  

  filterArea(property: string, rule: string){
    if(!rule) this.removeFilter(property)
    else{
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
    }
  }

  removeFilter(property: string){
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

  send(){
    this.results = this.results.sort((n1,n2) => {
      if(n1.price > n2.price) {return 1}
      if(n1.price < n2.price) {return -1}
      return 0;
      
    })
    this.applyFilters()
    // this.filteredNames.price.sort((n1,n2) =>{
    //   return (this.results)? n1.localeComapare(n2)
    //   :n2.localeComapare(n1);
    // });
  }
  send2(){
    this.results = this.results.sort((n1,n2) => {
      if(n1.price < n2.price) {return 1}
      if(n1.price > n2.price) {return -1}
      return 0;
      
    })
    this.applyFilters()
  }

  
}