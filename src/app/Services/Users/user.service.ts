import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User_model } from 'src/app/Model/User_model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestoreCollection! : AngularFirestoreCollection<User_model>;
  todoDoc!: AngularFirestoreDocument<User_model>;


  constructor(private firestore: AngularFirestore , private route: Router) {
    this.firestoreCollection = firestore.collection('/Users');
   }



   addUser(user: User_model){
      new Promise<any>(() =>{
       this.firestoreCollection.add(user)
       .then(resolve => this.route.navigate(['/accueil_user/'+user.iduser])
        )

     })

   }


   updateUsr(id:string, new_Lastname: string, new_firtname: string, new_email: string,  new_password: string, new_roles: [],  new_panier: [])
   {
    this.firestoreCollection.doc(id).update({lastname:new_Lastname,
                                            firtname:new_firtname,
                                            email:new_email,
                                            roles:new_roles,
                                            panier:new_panier } )
   }

   deleteUser(id:string){
    this.firestoreCollection.doc(id).delete();
  }


}

