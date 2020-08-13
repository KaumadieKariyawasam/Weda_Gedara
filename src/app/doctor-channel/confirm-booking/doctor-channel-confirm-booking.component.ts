import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-channel-confirm-booking',
  templateUrl: './doctor-channel-confirm-booking.component.html',
  styleUrls: ['./doctor-channel-confirm-booking.component.css']
})
export class DoctorChannelConfirmBookingComponent implements OnInit {

    patient : any = {
                    };

    selected_doctor : any = {};
    channelingTimeSlot : any = {};
    patientDetail : any = {};

  constructor(private router: Router, private route: ActivatedRoute, private afs: AngularFirestore){
  }

  ngOnInit() {
       this.selected_doctor =  JSON.parse(localStorage.getItem('selected_doctor'));
       this.channelingTimeSlot =  JSON.parse(localStorage.getItem('channelingTimeSlot'));
       this.patientDetail =  JSON.parse(localStorage.getItem('patientDetail'));
  }

     navigateToChannelingConfirmPage(patientDetail) {
          this.router.navigate(['/doctor-channel-search']);
     }

     setItemOnLocalStorage (item_name, item) {
          localStorage.setItem(item_name, JSON.stringify(item));
     }

      onClickConfirm() {
            if(false){
                this.navigateToChannelingConfirmPage(this.patient);
            }
      }
}
