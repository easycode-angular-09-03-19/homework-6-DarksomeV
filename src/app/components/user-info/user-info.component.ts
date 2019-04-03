import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { User } from "../../interfaces/User";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  isReadOnly = true;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private flashMessagesService: FlashMessagesService,
    public router: Router
) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getuserById(id).subscribe((data: User) => {
      console.log(data);
      this.user = data;
    }, (err) => {
      console.log(err);
    });
  }


  onEdit() {
    this.isReadOnly = !this.isReadOnly;
  }

  onFormSubmit() {
    this.isReadOnly = !this.isReadOnly;
    const newUser = Object.assign(this.user);
    this.userService.updateUser(newUser).subscribe((data: User) => {
      this.router.navigate(['/']);
      this.flashMessagesService.show('Пользователь изменен успешно!', { cssClass: 'alert-success', timeout: 2000 });
    }, error => {
      this.flashMessagesService.show('Ошибка изменения пользователя.', { cssClass: 'alert-danger', timeout: 2000 });
    });
  }

}
