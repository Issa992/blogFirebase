import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string='';
  password:string='';


  constructor( private fire:AngularFireAuth, private router:Router ) { 

  }

  ngOnInit() {
  }

  login(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      console.log(this.email,this.password)
      this.router.navigate(['home'])
    }).catch(error=>{
    console.log(error)
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.fire.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        this.router.navigate(['home'])
      })
    })
  }

}
