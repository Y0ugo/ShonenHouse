import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { User_model } from 'src/app/Model/User_model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestoreCollection! : AngularFirestoreCollection<User_model>;
  todoDoc!: AngularFirestoreDocument<User_model>;


  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = firestore.collection('Users');
   }



   addUser(user: User_model){
      this.firestoreCollection.add(user)

   }


   updateUsr(id:string, new_Lastname: string, new_firtname: string, new_email: string,  new_password: string, new_roles: [],  new_panier: [])
   {
    this.firestoreCollection.doc(id).update({lastname:new_Lastname,
                                            firtname:new_firtname,
                                            email:new_email,
                                            password:new_password,
                                            roles:new_roles,
                                            panier:new_panier } )
   }

   deleteUser(id:string){
    this.firestoreCollection.doc(id).delete();
  }

  
}

