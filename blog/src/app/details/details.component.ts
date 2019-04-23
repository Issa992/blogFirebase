import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any
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
    email:''
  }

  constructor(public db: AngularFireDatabase,public route:ActivatedRoute) { 
    this.route.params.subscribe(params=>
      
      {
        this.id=params
    });

    this.itemList = db.list('skills')

    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let y = action.payload.toJSON()
        y['$key'] = action.key
        // console.log(action.key)

        if (action.key==this.id['id']) {
          this.itemArray.push(y as ListItemClass)
          this.data.name=this.itemArray[0]['name']
          this.data.skill=this.itemArray[0]['skill']

          this.data.email=this.itemArray[0]['email']

          this.data.phone=this.itemArray[0]['phone']

          this.data.notes=this.itemArray[0]['notes']


        }

        // this.itemArray.push(y as ListItemClass)

      })
       console.log(this.itemArray[0])

    })


  }

  ngOnInit() {
    // console.log("PARAMS"+this.id['id'])
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
  email:string;

}

