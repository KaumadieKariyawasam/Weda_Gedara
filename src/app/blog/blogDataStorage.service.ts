import { Posts } from './posts';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';


@Injectable()
export class DataStorageService {
    constructor(private http: Http, private blogService: BlogService) {}

    storeArticals() {
        // this.http.put('https://test123-ae77c.firebaseio.com/posts.jason');
    }

    getArticals() {
        this.http.get('https://test123-ae77c.firebaseio.com/posts.jason');
    }
}
