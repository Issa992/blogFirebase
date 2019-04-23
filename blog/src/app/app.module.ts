import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { AllskillsComponent } from './allskills/allskills.component';
import { DetailsComponent } from './details/details.component';

  import { AngularFireModule } from '@angular/fire';
  import { environment } from '../environments/environment';
  import { AngularFireAuthModule } from '@angular/fire/auth';
  import { AngularFirestoreModule } from '@angular/fire/firestore';
 import { AngularFireDatabaseModule } from '@angular/fire/database';
 import { CommonModule } from '@angular/common';  

// //build Routs
const routs: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-skill', component: AddSkillComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myskill', component: MyskillComponent},
  {path: 'allskills', component: AllskillsComponent},
  {path: 'details/:id', component: DetailsComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddSkillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    AllskillsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
     AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule.forRoot(routs),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
