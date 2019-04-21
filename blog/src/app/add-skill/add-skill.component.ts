import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import {Observable} from 'rxjs'
import {Router} from '@angular/router';




@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
//
export class AddSkillComponent implements OnInit {
 
  data ={
    name:'' ,
    phone:'' ,
    skill:'' ,
    city:'' ,
    price:'',
    notes:''
  }
  itemList:AngularFireList<any>

  constructor(public db:AngularFireDatabase,public route:Router) {
    this.itemList=db.list('skills')

  }

  ngOnInit() {
    console.log(this.data.city)
  }
  addSkill(){
    this.itemList.push({
      name:this.data.name ,
      phone:this.data.phone,
      skill:this.data.skill ,
      city:this.data.city ,
      price:this.data.price,
      notes:this.data.notes
    })
    
    this.route.navigate(['/myskill'])
  }

}
