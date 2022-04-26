import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-new-board-admin',
  templateUrl: './new-board-admin.component.html',
  styleUrls: ['./new-board-admin.component.css']
})
export class NewBoardAdminComponent implements OnInit {

  content = '';
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
