import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercheComponent } from './recherche/recherche.component';
import { PanierComponent } from './panier/panier.component';
import { DetailMangasComponent } from './detail-mangas/detail-mangas.component';
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';
import { UserGuardGuard } from './Guard/user-guard.guard';

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  { path: 'connexion', component: ConnexionComponent,},
  { path: 'acceuil/:id', redirectTo: '', canActivate:[UserGuardGuard]},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'recherche', component: RechercheComponent},
  { path: '404', component: AppComponent },
  { path: 'panier', component: PanierComponent},
  { path: 'mangas_id/:id', component: DetailMangasComponent},
  { path:  'nouveauUser/:email/:result_user', component: NouveauUserComponent},
  { path: 'accueil_user/:user', component:AccueilComponent , canActivate:[UserGuardGuard]},
  { path: '**', redirectTo: '/404' }, //tjr en dernier

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false})], //autorise a  mettre de trace dans la console ,utile pour les debugs
  exports: [RouterModule],
})
export class AppRoutingModule {

}
