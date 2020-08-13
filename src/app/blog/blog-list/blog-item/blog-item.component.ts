import { Artical } from './../../blog-edit/blog.module';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Posts } from './../../posts';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() artical: Artical;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
