import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-channel-time-slot',
  templateUrl: './doctor-channel-time-slot.component.html',
  styleUrls: ['./doctor-channel-time-slot.component.css']
})
export class DoctorChannelTimeSlotComponent implements OnInit {

    search_params : any = {
                                id : "",
                                specialization : "",
                                channelingFromDate: moment().format("DD/MM/YYYY"),
                                channelingToDate: moment().add(7,'days').format("DD/MM/YYYY"),
                          };

    searched_user_infor : any = {};
    channeling_time_slots : any[] = [];
    selected_doctor : any = {};
    channelingDateStr : string = "";


  constructor(private router: Router, private route: ActivatedRoute, private afs: AngularFirestore){
  }

  ngOnInit() {
       this.selected_doctor =  JSON.parse(localStorage.getItem('selected_doctor'));
       this.channelingDateStr =  JSON.parse(localStorage.getItem('channelingDateStr'));
        //set router parameters
      this.route.paramMap.subscribe(params => {
            this.search_params["id"] = this.selected_doctor.name;
            this.search_params["specialization"] = this.selected_doctor.specialization;
            this.search_params["channelingFromDate"] = !!this.channelingDateStr ? this.channelingDateStr : moment().format("DD/MM/YYYY") ;
            this.search_params["channelingToDate"] = moment(this.search_params["channelingFromDate"], "DD/MM/YYYY").add(!!this.channelingDateStr ? 1: 7,'days').format("DD/MM/YYYY");
      });
       //set user information
      this.afs.collection('test',ref => ref.where("name","==",this.search_params.id)).valueChanges().subscribe(results => {
        if(!!results){
            this.searched_user_infor =  results[0];
            console.log(this.searched_user_infor);
        }
      });
      //set channeling time channeling_time_slots
      var no_of_days = 0;
       while(moment(this.search_params["channelingFromDate"], "DD/MM/YYYY").add(no_of_days, 'days').diff(moment(this.search_params["channelingToDate"], "DD/MM/YYYY")) < 0) {
              this.channeling_time_slots.push({
                                            hospital : "Ayurvedic Hospital" ,
                                            location : (no_of_days % 2 == 1) ? "Colombo" : "Gampaha",
                                            timeslots : [
                                                     { date : moment(this.search_params["channelingFromDate"], "DD/MM/YYYY").add(no_of_days, 'days').format("DD/MM/YYYY"),
                                                       time_slots : [ "16:00", "17:00", "18:00", "19:00", "20:00" , "21:00"]
                                                     }
                                            ]
                                          });
              no_of_days++;
          }
  }

     navigateToChannelingPatientDetailPage(hospital, location, date, time) {
          //[routerLink]="['/doctor-channel-time-slot', doctor.name, doctor.specialization, channelingDateStr]"
          let channelingTimeSlot = {hospital, location, date, time};
          this.setItemOnLocalStorage("channelingTimeSlot", channelingTimeSlot);
          this.router.navigate(['/doctor-channel-patient-detail']);
     }

     setItemOnLocalStorage (item_name, item) {
          localStorage.setItem(item_name, JSON.stringify(item));
     }

}
