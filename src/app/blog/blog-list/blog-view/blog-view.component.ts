import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {AngularFirestore} from 'angularfire2/firestore';
import * as _ from 'lodash';
import { BlogService } from '../../blog.service';



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  
  @Input() index: number;

  
  id:string;
  results: any;
  exampleCol: any;
  articles: any;
  artical: any;

  constructor(private router: Router, private route: ActivatedRoute,private afs: AngularFirestore, private blogservice: BlogService) { }

  ngOnInit() {
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params['id']; // + means convert string to a number
    //     this.editMode = params['id'] != null; // checking in which mode we are in
    //     console.log(this.id)
    //   }
    // );
    //

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      console.log(this.id);
  // this.route.params.subscribe(params => {
  //     this.id = params['id'];
  // });
  // this.afs.collection('test',ref => ref.limit(4)).valueChanges().subscribe(results => {
  //     subscribe((names)=>{
  //                this.names = names;
  //     this.results = results;
  
      })
      this.blogservice.getBlogDetails(this.id).subscribe(
          res => {console.log(res);
            this.artical = res;
          return this.artical;}
          
      );
      
      
     
  }

}
