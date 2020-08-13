import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';

@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.css']
})
export class DoctorSearchComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  name: string;
  area: string;
  gender: string;
  male="male";
  female="female";

  public query: string;

  filters ={}

  constructor(private afs: AngularFirestore){

  }

  //.orderBy('name')
  ngOnInit(){
    this.afs.collection('doctors',ref => ref.limit(5)).valueChanges().subscribe(results => {
    this.results = results;
    this.applyFilters()
    })
  }

  private applyFilters(){
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))  //interate amoung the results and apply filter funtion/s 
  }

  filterName(property: string, rule: string){  //filter by name 
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())  //function to map whether the value is passed is eqaul to the entered value
    console.log(this.filters)
    this.applyFilters()
  }
  

  filterArea(property: string, rule: string){   //filter by area
    if(!rule) this.removeFilter(property)
    else{
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
    }
  }

  filterGender(property: string, rule: string){  //filter by gender
    if(!rule) this.removeFilter(property)
    else{
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
    }
  }

  removeFilter(property: string){  //remove the filter 
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

  send(){  //sort data from high to low
    this.results = this.results.sort((n1,n2) => {
      if(n1.price > n2.price) {return 1}
      if(n1.price < n2.price) {return -1}
      return 0;
    })
    this.applyFilters()
  }
  send2(){  //sort data from low to high 
    this.results = this.results.sort((n1,n2) => {
      if(n1.price < n2.price) {return 1}
      if(n1.price > n2.price) {return -1}
      return 0;
    })
    this.applyFilters()
  }

}
