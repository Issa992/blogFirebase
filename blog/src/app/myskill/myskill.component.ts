import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable } from 'rxjs'
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Key } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {
  itemList: AngularFireList<any>
  itemArray = []

  data = {
    $key: '',
    name: '',
    phone: '',
    skill: '',
    city: '',
    price: '',
    notes: '',
  }
  myUid:any;

  constructor(public db: AngularFireDatabase,public route:Router, private fire:AngularFireAuth) {
    this.itemList = db.list('skills')

    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let y = action.payload.toJSON()
        y['$key'] = action.key

        this.itemArray.push(y as ListItemClass)

      })
      console.log(this.itemArray)

    })
      //this.myUid=localStorage.getItem('uid')
     this.myUid=this.fire.auth.currentUser.uid;
    let UID=this.myUid;
    console.log("UUUUIIIIIDDDDD::::::"+UID)
  }

  ngOnInit() {
  }
  editForm($key){
    for(let value of this.itemArray){
      if (value['$key']==$key) {
        console.log(value['$key'])

        this.data.$key=value['$key'],
        this.data.name= value['name'],
        this.data.phone= value['phone'],
        this.data.skill= value['skill'],
        this.data.city=value['city'],
        this.data.price= value['price'],
        this.data.notes= value['notes']
        
      }

    }

  }
  onEdit($key) {
// values from the form
        this.data.name
        this.data.phone
        this.data.skill
        this.data.city
        this.data.price
        this.data.notes

    // console.log("test" + "key: " + $key + "name: " + this.data.name + "phone :" + this.data.phone + 
    // "skill: " + this.data.skill + "city: " + this.data.city + "price: " + this.data.price + "notes: " + this.data.notes)

    this.itemList.set($key,{
      name:this.data.name,
      phone:this.data.phone,

      skill:this.data.skill,

      city:this.data.city,
      price:this.data.price,
      notes:this.data.notes
    
    })
    this.itemArray=[]

    this.route.navigate(['/myskill'])

  }
  onDelete($key) {
  this.itemList.remove($key);
  this.itemArray=[]

  }
}

// model Class
export class ListItemClass {
  $key: string;
  name: string;
  phone: number;
  skill: string;
  city: string;
  price: string;
  notes: string;
  uid:string;

}
