import {Component, OnInit} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  gender = ['Male', 'Female', 'Other'];
  newUser: User = {
    id: 25,
    name: 'Sam Brown',
    email: 'samBrown1986@yahoo.com',
    password: {pwd: 'HJFD@LDFL25', confirmPwd: 'HJFD@LDFL25'},
    gender: 'Male',
    phone: '241-025-88'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
