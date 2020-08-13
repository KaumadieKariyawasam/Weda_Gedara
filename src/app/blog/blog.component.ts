import { BlogService } from './blog.service';
import { Posts } from './posts';
import { AppModule } from './../app.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // editorForm: FormGroup;

  @Input() blog: Posts;

  constructor() { }

  ngOnInit() {
    // this.editorForm = new FormGroup({
    //   'editor': new FormControl(null)
    // });
  }


}
