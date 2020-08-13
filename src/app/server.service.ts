import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()

export class ServerService {
    constructor(private http: Http) {

    }

    StoreRegisterData(data: any[]) {
        return this.http.post('https://test123-ae77c.firebaseio.com/users.json', data);
    }

    // onSaveuser() {

    // }

    // createPolicy(policy: signup){
    //     return this.firestore.collection('policies').add(policy);
    // }
}
