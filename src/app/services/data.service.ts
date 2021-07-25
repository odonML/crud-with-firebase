import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: AngularFirestoreCollection<User>;
  user: AngularFirestoreDocument<User>;
  constructor(
    private db: AngularFirestore
  ) { }

/* Ejemplo 1
  uno(){
    return console.log("el click llego a services/data");
  }
  */

 getUsers(){
   console.log("se hace la peticion");
  
  this.users = this.db.collection('users');
  return this.users;
  
 }
 getUsersById(id){
  this.user = this.db.collection('users/').doc(id);
  console.log("---------- "+this.user);
  return this.user;
 }

 addUser(user:User){
  return this.db.collection('users/').add(user);
 }
 
 updateUser(key:string, form:User){
   console.log("ID service"+key);
   var first_name = form.first_name;
   var last_name = form.last_name;
   var avatar = form.avatar;
   var email = form.email;

   this.db.doc('users/'+key).ref.get().then(function(product){
     if(product.exists){
       console.log("usuario existe en BD");
       product.ref.update({
         first_name:first_name,
         last_name: last_name,
         avatar: avatar,
         email: email
       });
     }else{
       console.log("NA");
     }
   }).catch(function( error ){
    console.log( "Error Getting Document:", error )
  });
 }

 deleteUser(key){
   this.db.collection('users/').doc(key).delete().then(function(){
     console.log("eliminado");
   }).catch(function(error) {
    console.error("Error removing document: ", error);
    });
 }
}
