import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import {User} from "../../interfaces/User";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

}
