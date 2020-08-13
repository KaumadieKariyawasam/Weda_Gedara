import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css']
})
export class SupplierViewComponent implements OnInit {

  id:string;
    results: any;
    exampleCol: any;
    

    constructor(private router: Router, private route: ActivatedRoute,private afs: AngularFirestore){}
    // constructor(private router: Router, private route: ActivatedRoute, private http: Http,private afs: AngularFirestore) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get("id")
            
        // this.route.params.subscribe(params => {
        //     this.id = params['id'];
        // });
        // this.afs.collection('test',ref => ref.limit(4)).valueChanges().subscribe(results => {
        //     subscribe((names)=>{
        //                this.names = names;
        //     this.results = results;
        
            });
            // this.exampleCol=this.afs.collection('test',ref=>ref.where("name","==",this.id));
            this.afs.collection('supplier',ref => ref.where("email","==",this.id)).valueChanges().subscribe(results => {
                this.results = results[0];
                // alert(JSON.stringify(this.results));
                console.log(JSON.stringify(this.results));
                });
        
    }

}