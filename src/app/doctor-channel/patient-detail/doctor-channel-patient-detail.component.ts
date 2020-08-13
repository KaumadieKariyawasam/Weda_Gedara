import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-channel-patient-detail',
  templateUrl: './doctor-channel-patient-detail.component.html',
  styleUrls: ['./doctor-channel-patient-detail.component.css']
})
export class DoctorChannelPatientDetailComponent implements OnInit {

    patient : any = {
                        name : "",
                        nic : "",
                        mobile : "",
                        email : ""
                    };

    selected_doctor : any = {};
    channelingTimeSlot : string = "";

  constructor(private router: Router, private route: ActivatedRoute, private afs: AngularFirestore){
  }

  ngOnInit() {
       this.selected_doctor =  JSON.parse(localStorage.getItem('selected_doctor'));
       this.channelingTimeSlot =  JSON.parse(localStorage.getItem('channelingTimeSlot'));
  }

     navigateToChannelingConfirmPage(patientDetail) {
          this.setItemOnLocalStorage("patientDetail", patientDetail);
          this.router.navigate(['/doctor-channel-confirm-booking']);
     }

     setItemOnLocalStorage (item_name, item) {
          localStorage.setItem(item_name, JSON.stringify(item));
     }

      onClickContinue(form: NgForm) {
            if(form.valid){
                this.navigateToChannelingConfirmPage(this.patient);
            }
      }
}
