import {Component, Input, OnInit} from '@angular/core';
import {HotelsIn} from "../../app.component";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-anapa',
  templateUrl: './anapa.component.html',
  styleUrls: ['./anapa.component.css']
})
export class AnapaComponent implements OnInit {


  @Input()
  dataType: HotelsIn = new HotelsIn(["Movenpick Resort & SPA Anapa Miracleon 5 звезд", "Mövenpick Resort & SPA Anapa Miracleon - роскошный пятизвездочный курорт на побережье Анапы. Гости могут насладиться Черным морем и золотым песком на частном пляже отеля Mövenpick. Этот курортный отель с питанием по системе все включено окружен красивыми зелеными насаждениями. Внутри наш яркий и теплый дизайн означает, что вы почувствуете умиротворение с первого момента.","../../assets/images/anapa-Hotels/anapa_Hotel_1.jpg","stack"],
    ["Grand Hotel Anapa 5 звезд", "Grand Hotel Anapa — это круглогодичный курорт, включающий пятизвездочный отель на первой береговой линии, SPA-центр MySPAcoil с эксклюзивными программами оздоровления организма, 187 номеров, включая апартаменты с индивидуальным инфинити бассейном, 3 ресторана, 4 бара, собственный закрытый пляж с лечебным кварцевым песком и развитой инфраструктурой, тренажерный зал, площадки для детских игр и занятий спортом, поле ЛазерТаг.", "../../assets/images/anapa-Hotels/anapa_Hotel_2.jpg","queue"],
    ["Золотая бухта 5 звезд", "Апарт-отель «Золотая бухта» расположен в центре Анапы у самого берега моря, где в шаговой доступности находится вся основная инфраструктура курорта: аквапарк, парк аттракционов, кафе, бары, магазины и торговые центры. Собственный пляж с открытым бассейном и детской комнатой находится в 30 метрах. Ресторан на пляже угощает посетителей блюдами средиземноморской кухни.\n" +
    "Отдыхающие размещаются в двухместных бунгало разных категорий комфорта на самом берегу моря.","../../assets/images/anapa-Hotels/anapa_Hotel_3.jpg","evpatoria"],
    ["Beton Brut 4 звезды", "Beton Brut — 4-звёздочный all-inclusive отель в Анапе. На территории площадью 2,5 га — 6 корпусов, зона отдыха с бассейном и баром, спортивная и детская площадки, охраняемая парковка. Главный восьмиэтажный корпус — это бывшая советская фабрика, которую в 2016 году команда дизайнеров превратила в ультрасовременный отель в стиле лофт. Здесь 173 номера, шведский стол, spa-комплекс с бассейном, кинозал, детские комнаты и тренажёрный зал. На восьмом этаже корпуса — панорамный ресторан BRUT8. А в зоне отдыха — открытый бассейн и бар.", "../../assets/images/anapa-Hotels/anapa_Hotel_4.jpg","graphs"],
    "Анапа",
    "Анапа — климатический и бальнеологический курорт. Сюда приходит воздух с Чёрного моря, Кавказских гор и таманских равнин. Проще говоря, Анапа — одно из лучших в нашей стране мест в плане экологии и климата. Туристически Анапу лучше рассматривать от станицы Благовещенская до села Большой Утриш. Эти населённые пункты и всё, что между ними, входят в городской округ Анапа.");
  constructor(private userService: UserService) { }

  numOfLikesFirst
  numOfLikesSecond = 10
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

  firstLikeButtonClick() {
    this.firstLikeClicked = true;
    this.firstDislikeClicked = false;
    this.userService.addLike("alg_search").subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )
  }


  firstDislikeButtonClick() {
    this.firstDislikeClicked = true;
    this.firstLikeClicked = false;
    this.userService.subtractLike("alg_search").subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )

  }

  ngOnInit(): void {
  }

}
