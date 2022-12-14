import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MangasService } from './Services/Mangas/mangas.service';
import { UserService } from './Services/Users/user.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SampleBigTextComponent } from './sample-big-text/sample-big-text.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RechercheComponent } from './recherche/recherche.component';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from './environnements/environnements';
import { PanierComponent } from './panier/panier.component';
import { AuthenticationService } from './Services/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
//import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DetailMangasComponent } from './detail-mangas/detail-mangas.component';
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    NavbarComponent,
    SampleBigTextComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilComponent,
    RechercheComponent,
    PanierComponent,
    DetailMangasComponent,
    NouveauUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    DragScrollModule,
    RouterModule,
    CarouselModule ,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

  //  AngularFireStorageModule



  ],
  providers: [MangasService ,AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
