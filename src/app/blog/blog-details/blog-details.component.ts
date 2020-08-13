import { BlogService } from './../blog.service';
import { Posts } from './../posts';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Artical } from './../blog-edit/blog.module';
import { Articaldetails } from '../artical';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {
  artical: Artical;
  id: number;
  editMode = false;

  @Input() index: number;

  articalde: Articaldetails = new Articaldetails;

  constructor(private blogService: BlogService, private rout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rout.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; // + means convert string to a number
        this.editMode = params['id'] != null; // checking in which mode we are in
      }
    );
  }

  onEditArtical(artical: Artical) {
  }

  onDeleteArtical() {
    this.blogService.deleteArtical(this.id);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.rout});
  }

}
