import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../interfaces/User";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input() user: User;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onInfoClick() {
    this.router.navigate([`/user`, this.user.id]);
  }
  onPostsClick() {
    this.router.navigate([`/posts`], { queryParams: { userId: this.user.id } });
  }
}
