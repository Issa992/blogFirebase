import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  name = '';
  phone = '';
  skill = '';
  city = '';
  price = '';
  notes = '';

  constructor() { }

  ngOnInit() {
  }

}
