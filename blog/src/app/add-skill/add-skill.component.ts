import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import {Observable} from 'rxjs'
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';





@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
//
export class AddSkillComponent implements OnInit {
 
  data ={
    email:'',
    uid:'',
    name:'' ,
    phone:'' ,
    skill:'' ,
    city:'' ,
    price:'',
    notes:''
  }
  itemList:AngularFireList<any>

  constructor(public db:AngularFireDatabase,public route:Router, private fire:AngularFireAuth) {
    this.itemList=db.list('skills')

  }

  ngOnInit() {
   let user= this.fire.auth.currentUser.email;
   this.data.email=user;
   let userUid=this.fire.auth.currentUser.uid;
   this.data.uid=userUid;

   console.log("UUUUUU::::"+userUid)
 
    //console.log("useEEEEEE::::"+this.data.email)
  }
  addSkill(){
    this.itemList.push({
      name:this.data.name ,
      phone:this.data.phone,
      skill:this.data.skill ,
      city:this.data.city ,
      price:this.data.price,
      notes:this.data.notes,
      email:this.data.email,
      uid:this.data.uid
    })
    
    this.route.navigate(['/myskill'])
  }

}
