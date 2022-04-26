import { Component, OnInit } from '@angular/core';
import {AppUser} from "./AppUser";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {TokenStorageService} from "./_services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {

  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  title = 'hotels';
  sortAlgs: HotelsIn = new HotelsIn(["Sea Galaxy 4 Звезды ", "«Wind Rose Hotel & SPA» располагается в самом центре города Сочи. В пешей доступности находится знаменитый парк «Ривьера» с дельфинарием и зоопарком.","../../assets/images/sochi-Hotels/hotel_Sohi_1.jpg","bubble"],
    ["Swissôtel Resort 5 Звезд", "Swissôtel Resort Сочи Камелия – это уникальное сочетание великой истории, современного уровня комфорта и высоких стандартов швейцарского гостеприимства.", "../../assets/images/sochi-Hotels/hotel_Sohi_2.jpg","insert"],
    ["Cosmos sochi-Hotels Hotel 4 Звезды", "Cosmos sochi-Hotels Hotel отвечает всем требованиям современной инфраструктуры и идеально подходит как деловым путешественникам, так и туристам.","../../assets/images/sochi-Hotels/hotel_Sohi_3.jpg","choice"],
    ["Роза Ветров 4 Звезды", "Wind Rose Hotel & SPA располагается в самом центре города Сочи. В пешей доступности находится знаменитый парк «Ривьера» с дельфинарием и зоопарком.", "../../assets/images/sochi-Hotels/hotel_Sohi_4.jpg","collision"],
    "Сочи",
    "На территории города-курорта раскинулось около 200 пляжей на любой вкус и цвет: муниципальные, санаторные, песчаные, галечные и т. д. Все это разнообразие объединяют ключевые требования – благоустройство и безопасность. Все сочинские пляжи обеспечены пляжным инвентарем, спасательными и медицинскими постами, кабинками для переодевания, туалетами и душевыми, шезлонгами и зонтиками, целый штат профессиональных спасателей внимательно следит за безопасностью гостей.");
}

export class HotelsIn {

  constructor(firstHotel: string[], secondHotel: string[], thirdHotel: string[] , forthHotel: string[],
              sectionName: string, sectionDescription: string) {
    this.firstHotel = firstHotel;
    this.secondHotel = secondHotel;
    this.thirdHotel = thirdHotel;
    this.fourthHotel = forthHotel;
    this.sectionName = sectionName;
    this.sectionDescription = sectionDescription;

  }

  firstHotel: string[] = [];
  secondHotel: string[] = [];
  thirdHotel: string[] = [];
  fourthHotel: string[] = [];

  sectionName: string = "";
  sectionDescription: string = "";
}

export class HotelDescription {
  hotelName: string = "";
  hotelClass: string = "";
  imageUrl: string = "";
  description: string = "";

  constructor(hotelName: string, hotelClass: string, imageUrl: string, description: string) {
    this.hotelName = hotelName;
    this.hotelClass = hotelClass;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
