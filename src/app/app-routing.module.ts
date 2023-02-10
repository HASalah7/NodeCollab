import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserConnexionComponent } from './User/user-connexion/user-connexion.component';
import { UserFormComponent } from './Forms/user-form/user-form.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { CollaboratorsComponent } from './Pages/collaborators/collaborators.component';
import { UserProfilComponent } from './User/user-profil/user-profil.component';

const routes: Routes = [
  { path:"", redirectTo: "home",pathMatch: "full" },
  /***************ROUTE ACCUEUIL******************/
  { path: "home", component: IndexComponent},
  { path: "landing-page", component: LandingPageComponent},
  { path: "user-form", component: UserFormComponent},
  { path: "user-profil", component: UserProfilComponent},
  { path: "user-connexion", component: UserConnexionComponent},
  { path: "collaborators", component: CollaboratorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
