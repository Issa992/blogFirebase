import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string='';
  password:string='';


  constructor(private fire:AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }
  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      console.log(this.email,this.password)
      this.router.navigate(['home'])
    }).catch(error=>{
    console.log(error)
    })
  }

}
