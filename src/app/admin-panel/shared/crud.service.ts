import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore ) { }

  getDoctors() { 
    return this.firestore.collection("doctors").snapshotChanges();
  }

  deleteDoctor(data) {
    return this.firestore.collection("doctors").doc(data.payload.doc.id).delete();
 }

 verifyDoctor(data) {
  alert('Succesfully Verified');
  return this.firestore.collection("doctors").doc(data.payload.doc.id).set({ status: true }, { merge: true });
}

getSpas() { 
  return this.firestore.collection("spa1").snapshotChanges();
}

deleteSpas(data) {
  return this.firestore.collection("spa1").doc(data.payload.doc.id).delete();
}

verifySpas(data) {
return this.firestore.collection("spa1").doc(data.payload.doc.id).set({ status: true }, { merge: true });
}

getSuppliers() { 
  return this.firestore.collection("supplier").snapshotChanges();
}

deleteSuppliers(data) {
  return this.firestore.collection("supplier").doc(data.payload.doc.id).delete();
}

verifySuppliers(data) {
return this.firestore.collection("supplier").doc(data.payload.doc.id).set({ status: true }, { merge: true });
}

getPosts() { 
  return this.firestore.collection("posts").snapshotChanges();
}

getUsers() { 
  return this.firestore.collection("users").snapshotChanges();
}

deleteUsers(data) {
  return this.firestore.collection("users").doc(data.payload.doc.id).delete();
}

verifyUsers(data) {
return this.firestore.collection("users").doc(data.payload.doc.id).set({ status: true }, { merge: true });
}

}
