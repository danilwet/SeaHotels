import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {HotelsIn} from "../app.component";
import {UserService} from "../_services/user.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor(private userService: UserService) {
    console.log(this.userService.getNumberOfLikes("alg_search"))
  }


  numOfLikesFirst
  numOfLikesSecond
  numOfLikesThird
  numOfLikesFourth
  firstLikeClicked = false;
  firstDislikeClicked = false;
  secondLikeClicked = false;
  secondDislikeClicked = false;
  thirdLikeClicked = false;
  thirdDislikeClicked = false;
  fourthLikeClicked = false;
  fourthDislikeClicked = false;


  @Input()
  algType: HotelsIn = new HotelsIn(["name", "O","png_name","request_name"], ["name", "O","png_name","request_name"],
    ["name", "O","png_name","request_name"], ["name", "O","png_name","request_name"],"?????????",
    "?????????");

  firstLikeButtonClick() {
    this.firstLikeClicked = true;
    this.firstDislikeClicked = false;
    this.userService.addLike(this.algType.firstHotel[3]).subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )
  }


  firstDislikeButtonClick() {
    this.firstDislikeClicked = true;
    this.firstLikeClicked = false;
    this.userService.subtractLike(this.algType.firstHotel[3]).subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )

  }

  secondLikeButtonClick() {
    this.secondLikeClicked = true;
    this.secondDislikeClicked = false;
    this.userService.addLike(this.algType.secondHotel[3]).subscribe(
      res => {
        this.numOfLikesSecond = res;
      }
    )
  }


  secondDislikeButtonClick() {
    this.secondDislikeClicked = true;
    this.secondLikeClicked = false;
    this.userService.subtractLike(this.algType.secondHotel[3]).subscribe(
      res => {
        this.numOfLikesSecond = res;
      }
    )
  }

  thirdLikeButtonClick() {
    this.thirdLikeClicked = true;
    this.thirdDislikeClicked = false;
    this.userService.addLike(this.algType.thirdHotel[3]).subscribe(
      res => {
        this.numOfLikesThird = res;
      }
    )
  }


  thirdDislikeButtonClick() {
    this.thirdDislikeClicked = true;
    this.thirdLikeClicked = false;
    this.userService.subtractLike(this.algType.thirdHotel[3]).subscribe(
      res => {
        this.numOfLikesThird = res;
      }
    )
  }

  fourthLikeButtonClick() {
    this.fourthLikeClicked = true;
    this.fourthDislikeClicked = false;
    this.userService.addLike(this.algType.fourthHotel[3]).subscribe(
      res => {
        this.numOfLikesFourth = res;
      }
    )
  }


  fourthDislikeButtonClick() {
    this.fourthDislikeClicked = true;
    this.fourthLikeClicked = false;
    this.userService.subtractLike(this.algType.fourthHotel[3]).subscribe(
      res => {
        this.numOfLikesFourth = res;
      }
    )
  }

  ngOnInit(): void {
    this.userService.getNumberOfLikes(this.algType.firstHotel[3]).subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )
    this.userService.getNumberOfLikes(this.algType.secondHotel[3]).subscribe(
      res => {
        this.numOfLikesSecond = res;
      }
    )
    this.userService.getNumberOfLikes(this.algType.thirdHotel[3]).subscribe(
      res => {
        this.numOfLikesThird = res;
      }
    )
    this.userService.getNumberOfLikes(this.algType.fourthHotel[3]).subscribe(
      res => {
        this.numOfLikesFourth = res;
      }
    )



  }

}


