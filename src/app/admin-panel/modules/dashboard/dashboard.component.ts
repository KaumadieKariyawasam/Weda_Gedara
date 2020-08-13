import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalDoctorCount: number;
  totalSpaCount: number;
  totalSupplierCount: number;
  totalUserCount: number;
  totalPostCount: number;

  total : number = 0 ;
  getUserList: any;

  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.getDoctors();
    this.getSpas();
    this.getSuppliers();
    this.getUsers();
    this.getPosts();
  }


  getDoctors = () =>
      this.crudService
      .getDoctors()
      .subscribe(dataArray => {
        this.totalDoctorCount = dataArray.length;
        console.log(this.totalDoctorCount); 
        // this.getUserList = dataArray.map(item =>{
        //   this.total ++ ;
        //   console.log(this.total);          
        //   return {id : item.payload.doc.id,
        //   ...item.payload.doc.data() 
        //   }  
        // })  
      });

      getSpas = () =>
      this.crudService
      .getSpas()
      .subscribe(dataArray => {
        this.totalSpaCount = dataArray.length;
        console.log(this.totalSpaCount); 
        // this.getUserList = dataArray.map(item =>{
        //   this.total ++ ;
        //   console.log(this.total);          
        //   return {id : item.payload.doc.id,
        //   ...item.payload.doc.data() 
        //   }  
        // })  
      });

      getSuppliers = () =>
      this.crudService
      .getSuppliers()
      .subscribe(dataArray => {
        this.totalSupplierCount = dataArray.length;
        console.log(this.totalSupplierCount); 
        // this.getUserList = dataArray.map(item =>{
        //   this.total ++ ;
        //   console.log(this.total);          
        //   return {id : item.payload.doc.id,
        //   ...item.payload.doc.data() 
        //   }  
        // })  
      });

      getUsers = () =>
      this.crudService
      .getUsers()
      .subscribe(dataArray => {
        this.totalUserCount = dataArray.length;
        console.log(this.totalUserCount); 
        // this.getUserList = dataArray.map(item =>{
        //   this.total ++ ;
        //   console.log(this.total);          
        //   return {id : item.payload.doc.id,
        //   ...item.payload.doc.data() 
        //   }  
        // })  
      });

      getPosts = () =>
      this.crudService
      .getPosts()
      .subscribe(dataArray => {
        this.totalPostCount = dataArray.length;
        console.log(this.totalPostCount); 
        // this.getUserList = dataArray.map(item =>{
        //   this.total ++ ;
        //   console.log(this.total);          
        //   return {id : item.payload.doc.id,
        //   ...item.payload.doc.data() 
        //   }  
        // })  
      });



}
