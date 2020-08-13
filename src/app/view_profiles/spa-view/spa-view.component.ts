import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';
import {SpaService} from '../../shared/spa.service';


@Component({
  selector: 'app-spa-view',
  templateUrl: './spa-view.component.html',
  styleUrls: ['./spa-view.component.scss']
})
export class SpaViewComponent1 implements OnInit {

  id:string;
  results: any;
  exampleCol: any;
  gallery=[]=[];
  article=[]=[];


  constructor(private router: Router, private route: ActivatedRoute,private afs: AngularFirestore,private spaService:SpaService){}
  // constructor(private router: Router, private route: ActivatedRoute, private http: Http,private afs: AngularFirestore) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
          this.id = params.get("id")
      });
      this.afs.collection('spa1',ref => ref.where("email","==",this.id)).valueChanges().subscribe(results => {
      this.results = results[0];
        // alert(JSON.stringify(this.results));
      console.log(JSON.stringify(this.results));
      });
      this.spaService.getGallery(this.id).subscribe(result=>{
        this.gallery=result;
      });
      this.spaService.getDocument(this.id).subscribe(result=>{
        this.article=result;
      });
  }

}