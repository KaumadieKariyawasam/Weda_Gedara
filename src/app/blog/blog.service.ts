import { AuthService } from './../signup/auth.service';
import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Posts } from './posts';
import { Artical } from './blog-edit/blog.module';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()

export class BlogService {
  postsCollection: AngularFirestoreCollection<Posts>;
  BlogSelected = new EventEmitter<Posts>();

  articalData: Artical;

  articalsChanged = new Subject<Artical[]>(); // pass the new array with changed values


  formData: Artical;
  newdata: Artical;
  ArticalArray: Artical[];
  articals: any;



  constructor(private firestore: AngularFirestore, private authService: AuthService) {

    // get all the published and filter it by desending order
    // this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('Published', 'desc'));
  }

  // getPosts() {
  //   return this.postsCollection.snapshotChanges().map(actions => {  //get the data and also the meta data that we want
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as Posts;
  //       const id = a.payload.doc.id;
  //       return {id, ...data};
  //     });
  //   });
  // }




  getBlogDetails(blogId: string) {
    return this.firestore.doc<Artical>(`posts/`+blogId).valueChanges();
  }


  getArtical() {
    return this.firestore.collection('posts').snapshotChanges();
  }


  addArtical(new_artical: Artical) {
    // this.articals.push(new_artical);
    // this.articalsChanged.next(this.articals.slice());
    let testObj: any;
    testObj = Object.assign({}, new_artical);
    this.firestore.collection('posts').add(testObj)
    .then(
      () => {console.log('edited artical added');}
    )
    .catch(
      error => {
        alert('Could not add to the artical' + error.message); //log.error(error.stackTrace)
          console.log(error);
    });
    
  }

  deleteArtical(index: number) {
    this.articals.splice(index, 1);
    this.articalsChanged.next(this.articals.slice());
  }


}
