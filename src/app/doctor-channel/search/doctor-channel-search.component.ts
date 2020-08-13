import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-channel-search',
  templateUrl: './doctor-channel-search.component.html',
  styleUrls: ['./doctor-channel-search.component.css']
})
export class DoctorChannelSearchComponent implements OnInit {

  search_doctor_params : any = {
                                    name : "",
                                    area: "",
                                    channelingDate : "",
                                    specialization : "",
                                    gender: ""
                               };

  default_specifications: any[] = [
                                    {description: 'Any Specification', code: ""},
                                    {description: 'GENERAL PHYSICIAN', code: "GENERAL PHYSICIAN"},
                                    {description: 'ARTHRITIS SPECIALIST', code: "ARTHRITIS SPECIALIST"},
                                    {description: 'DERMATOLOGY SPECIALIST', code: "DERMATOLOGY SPECIALIST"},
                                    {description: 'E N T SPECIALIST', code: "E N T SPECIALIST"},
                                    {description: 'GYNAECOLOGY AND DIABETES SPECIALIST', code: "GYNAECOLOGY AND DIABETES SPECIALIST"},
                                    {description: 'PSYCHIATRIC & MENTAL DISORDERS SPECIALIST', code: "PSYCHIATRIC & MENTAL DISORDERS SPECIALIST"},
                                    {description: 'ORTHOPAEDICS SPECIALIST', code: "ORTHOPAEDICS SPECIALIST"},
                                  ];

  filters = {}
  channelingDateStr : string = "";
  searched_doctors: any[] = [];
  filtered_doctors: any[] = [];
  other_default_attributes : any = { specialization : "GENERAL PHYSICIAN", available_from : "01/01/2019", available_to : "31/12/2022"};


  constructor(private router: Router, private route: ActivatedRoute, private afs: AngularFirestore){
  }

  ngOnInit(){
    this.afs.collection('test', ref => ref.limit(10))
    .valueChanges()
    .subscribe(results => {
            this.searched_doctors = this.adaptSearchDoctors(results);
            this.filterDoctors(null, null);
            //set values in local storage
            localStorage.setItem('all_doctors', JSON.stringify(this.searched_doctors));
            localStorage.setItem('default_specifications', JSON.stringify(this.default_specifications));
        }
    );
  }

  adaptSearchDoctors(search_doctors){
    return _.map(search_doctors, (doctor, index) => {
        return { ...this.other_default_attributes, ...doctor};
    })
  }

  filterDoctors(property: string, rule: any){
        if(!!property){
            if(!rule) {
                    delete this.filters[property]
                    this[property] == null;
            } else {
                if (property == "channelingDate") {
                    if(!!rule)  {
                        this.channelingDateStr = moment([rule.year, (rule.month-1), rule.day]).format("DD/MM/YYYY");
                        this.filters["available_from"] = (val) => {
                            return (moment([rule.year, (rule.month-1), rule.day])).isAfter(moment(val,"DD/MM/YYYY"));
                        }
                        this.filters["available_to"] = (val) => {
                            return (moment(val,"DD/MM/YYYY")).isAfter(moment([rule.year, (rule.month-1), rule.day]));
                        }
                    }
                } else {
                    this.filters[property] = (val) => {
                        val.toLowerCase().includes(rule.toLowerCase())
                    };
                }
            }
        }
        this.applyFilters();
  }

  private applyFilters(){
    this.filtered_doctors = _.filter(this.searched_doctors, _.conforms(this.filters))
  }

   navigateToChannelingTimeSlotPage(selected_doctor) {
        //[routerLink]="['/doctor-channel-time-slot', doctor.name, doctor.specialization, channelingDateStr]"
        this.setItemOnLocalStorage("selected_doctor", selected_doctor);
        this.setItemOnLocalStorage("channelingDateStr", this.channelingDateStr);
        this.router.navigate(['/doctor-channel-time-slot']);
   }

   setItemOnLocalStorage (item_name, item) {
        localStorage.setItem(item_name, JSON.stringify(item));
   }
}
