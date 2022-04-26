import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  currentUser: any;
  constructor(private token: TokenStorageService) { }
  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

}
