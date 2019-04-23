import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:Observable<firebase.User>;
  private isLoggedIn:Boolean=false;
  private email:string;

  constructor( public afauth:AngularFireAuth,private router:Router ) {
    this.user=afauth.authState;
    let status=localStorage.getItem('isLoggedIn')
    console.log(status)

    if (status=='true'){
      this.isLoggedIn=true;

    }
    else{
      this.isLoggedIn=false
    }
    // firebase.auth().onAuthStateChanged(function(user){
    //   if(user){

    //     this.isLoggedIn=true;
    //   }
    //   else{
    //     this.isLoggedIn=false;
    //     this.router.navigate(['/login'])

    //   }
    // })

   }

  ngOnInit() {
  }
logOut(){
  this.afauth.auth.signOut();
  this.isLoggedIn=false
  localStorage.setItem('isLoggedIn','false')
  this.router.navigate(['login'])}
}
