import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';


@Component({
  selector: 'app-medical-search',
  templateUrl: './medical-search.component.html',
  styleUrls: ['./medical-search.component.css']
})
export class MedicalSearchComponent implements OnInit {
  results: any;
  filteredNames: any[] = [];
  name: string;
  area: string;

  public query: string;

  filters ={}

  constructor(private afs: AngularFirestore){
      
  }

  //.orderBy('name')
  ngOnInit(){
    this.afs.collection('supplier',ref => ref.limit(10)).valueChanges().subscribe(results => {
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

  // sortType(sort: string){
  //   if(sort=== 'pop'){
  //     this.results = this.results.sort(this.sortByPrice());
  //     console.log(this.results);
  //   }
  // }

  // sortByPrice(){
  //   return this.results.price-this.results.price;
  // }

  // ngOnInit(){
  //   // Observable.combineLatest(this.startobs,this.endobs).subscribe((value) =>{
  //   //   this.firequery(value[0],value[1]).subscribe((names)=>{
  //   //     this.names = names;
  //   //   })
  //   // })
  // }

  // search($event){
  //   let q = $event.target.value;
  //   Observable.combineLatest(this.startobs,this.endobs).subscribe((value) =>{
  //     this.firequery(value[0],value[1]).subscribe((names)=>{
  //       this.names = names;
  //     })
  //   })
  //   this.startAt.next(q);
  //   this.endAt.next(q + "\uf8ff");
  // }

  // searcharea($event){
  //   let q = $event.target.value;
  //   Observable.combineLatest(this.startobs,this.endobs).subscribe((value) =>{
  //     this.firequery2(value[0],value[1]).subscribe((names)=>{
  //       this.names = names;
  //     })
  //   })
  //   this.startAt.next(q);
  //   this.endAt.next(q + "\uf8ff");
  // }


  // firequery(start, end){
  //   return this.afs.collection('test',ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
  // }
  // firequery2(start, end){
  //   return this.afs.collection('test',ref => ref.limit(4).orderBy('area').startAt(start).endAt(end)).valueChanges();
  // }
}
