import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
//
export class AddSkillComponent implements OnInit {
  // name :string
  // phone: number
  // skill :string
  // city :string
  // price :string
  // notes :string
  data ={
    name:'issa' ,
    phone:'73' ,
    skill:'newSkill' ,
    city:'newCity' ,
    price:'230',
    notes:'new notes'
  }

  constructor() {

  }

  ngOnInit() {
    console.log(this.data.city)

  }

}
