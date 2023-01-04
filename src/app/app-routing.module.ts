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

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'acceuil', redirectTo: ''},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'recherche', component: RechercheComponent},
  { path: '404', component: AppComponent },
  { path: 'panier', component: PanierComponent},
  { path: 'mangas_id/:id', component: DetailMangasComponent},
  { path:  'nouveauUser/:email', component: NouveauUserComponent},
  { path: '**', redirectTo: '/404' },
  { path: 'accueil_user/:id', component:AccueilComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
