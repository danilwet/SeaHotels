import {Component, Input, OnInit} from '@angular/core';
import {HotelsIn} from "../../app.component";

@Component({
  selector: 'app-sochi',
  templateUrl: './sochi.component.html',
  styleUrls: ['./sochi.component.css']
})
export class SochiComponent implements OnInit {

  @Input()
  sortType: HotelsIn = new HotelsIn(["Sea Galaxy 4 Звезды ", "«Wind Rose Hotel & SPA» располагается в самом центре города Сочи. В пешей доступности находится знаменитый парк «Ривьера» с дельфинарием и зоопарком.","../../assets/images/sochi-Hotels/hotel_Sohi_1.jpg","bubble"],
    ["Swissôtel Resort 5 Звезд", "Swissôtel Resort Сочи Камелия – это уникальное сочетание великой истории, современного уровня комфорта и высоких стандартов швейцарского гостеприимства.", "../../assets/images/sochi-Hotels/hotel_Sohi_2.jpg","insert"],
    ["Cosmos sochi-Hotels Hotel 4 Звезды", "Cosmos sochi-Hotels Hotel отвечает всем требованиям современной инфраструктуры и идеально подходит как деловым путешественникам, так и туристам.","../../assets/images/sochi-Hotels/hotel_Sohi_3.jpg","choice"],
    ["Роза Ветров 4 Звезды", "Wind Rose Hotel & SPA располагается в самом центре города Сочи. В пешей доступности находится знаменитый парк «Ривьера» с дельфинарием и зоопарком.", "../../assets/images/sochi-Hotels/hotel_Sohi_4.jpg","collision"],
    "Сочи",
    "На территории города-курорта раскинулось около 200 пляжей на любой вкус и цвет: муниципальные, санаторные, песчаные, галечные и т. д. Все это разнообразие объединяют ключевые требования – благоустройство и безопасность. Все сочинские пляжи обеспечены пляжным инвентарем, спасательными и медицинскими постами, кабинками для переодевания, туалетами и душевыми, шезлонгами и зонтиками, целый штат профессиональных спасателей внимательно следит за безопасностью гостей.");
  constructor() { }

  ngOnInit(): void {
  }

}
