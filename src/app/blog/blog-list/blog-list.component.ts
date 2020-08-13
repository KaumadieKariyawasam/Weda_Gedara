import { BlogEditService } from './../blog-edit/blog-edit.service';
import { Artical } from './../blog-edit/blog.module';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BlogService } from './../blog.service';
import { Posts } from './../posts';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ArticalNew } from '../blog-edit/blognew.module';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  // posts: Observable<Posts[]>;

  @Output() postSelected = new EventEmitter<Posts>();
  @Input() artical: Posts;

  // postArray: Posts[];
  ArticalArray: Artical[];
  articles: Artical[];

  constructor(private postService: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.postArray = this.postService.getposts();
    this.postService.getArtical().subscribe(actionArray => {
      this.ArticalArray = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as ArticalNew; // casting into a post type
      });
      // console.log(this.ArticalArray); //methanata enw data
      // this.postService.setArticals(this.ArticalArray);
    });

    this.postService.articalsChanged
    .subscribe(
      (newarticals: Artical[]) => {
        this.articles = newarticals;
        console.log('this run inside Blog list');
      },
      (error) => {console.log('this run error'); }
    );

  }

  onPostSelected(post: Posts) {
    this.postSelected.emit(post);
  }

  onNewArtical() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  SortRecent(){
    this.ArticalArray = this.ArticalArray.sort((n1,n2) => {
      if(n1.date < n2.date) {return 1}
      if(n1.date > n2.date) {return -1}
      return 0;
      
    })
  }

  SortOld(){
    this.ArticalArray = this.ArticalArray.sort((n1,n2) => {
      if(n1.date > n2.date) {return 1}
      if(n1.date < n2.date) {return -1}
      return 0;
      
    })
  }

}
