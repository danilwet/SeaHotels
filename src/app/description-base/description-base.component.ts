import {Component, Input, OnInit} from '@angular/core';
import {HotelDescription} from "../app.component";

@Component({
  selector: 'app-description-base',
  templateUrl: './description-base.component.html',
  styleUrls: ['./description-base.component.css']
})
export class DescriptionBaseComponent implements OnInit {

  @Input()
  algDescription: HotelDescription =  new HotelDescription("Название","Тип","картинка","Описание");

  numberOfLikes: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }
}
