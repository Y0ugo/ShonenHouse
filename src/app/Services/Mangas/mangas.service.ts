import { Injectable } from '@angular/core';
import { Mangas_model } from 'src/app/Model/Mangas_model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MangasService {

  id!:any
  firestoreCollection! : AngularFirestoreCollection<Mangas_model>;
  todoDoc!: AngularFirestoreDocument<Mangas_model>;

constructor(private firestore: AngularFirestore , private http: HttpClient) {
  this.firestoreCollection = firestore.collection("/mangas");
 }


addMangas(mangas:Mangas_model){

   new Promise<any>(() =>{
    this.firestoreCollection.add(mangas)
    .then(resolve => console.log(mangas))
    
  })


 }

 getAllMangas() {
      return this.firestoreCollection.snapshotChanges()
      
  }
 
  getIdMangas(id:string){
    return this.firestoreCollection.doc(id).valueChanges()
  }


/*
 recupereProduits() { 
  return this.firestore.collection("Tomes").snapshotChanges().subscribe(tomes => {
    for(let tome of tomes){
      console.log(tome.type);
      
    }
  });
}


 /*updateUsr(id:string, new_Lastname: string, new_firtname: string, new_email: string,  new_password: string, new_roles: [],  new_panier: [])
 {
  this.firestoreCollection.doc(id).update({lastname:new_Lastname,
                                          firtname:new_firtname,
                                          email:new_email,
                                          password:new_password,
                                          roles:new_roles,
                                          panier:new_panier } )
 }
*/
 deleteMangas(id:string){
  this.firestoreCollection.doc(id).delete();
}

}
