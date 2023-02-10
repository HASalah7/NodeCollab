import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { UserConnexionComponent } from './User/user-connexion/user-connexion.component';
import { UserProfilComponent } from './User/user-profil/user-profil.component';
import { UserFormComponent } from './Forms/user-form/user-form.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollaboratorsComponent } from './Pages/collaborators/collaborators.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserConnexionComponent,
    UserProfilComponent,
    UserFormComponent,
    LandingPageComponent,
    NavbarComponent,
    CollaboratorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
