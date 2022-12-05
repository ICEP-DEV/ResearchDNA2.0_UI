import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        '../../assets/images/Sport Management014.jpg',
      imageAlt: '../../assets/images/Sport Management014.jpg',
    },
    {
      imageSrc:
        '../assets/images/tn_DSC_0036.jpg',
      imageAlt: '../assets/images/tn_DSC_0036.jpg',
    },
    {
      imageSrc:
        '../assets/images/280187056_5067702353305869_8974098893566089649_n.jpg',
      imageAlt: '../assets/images/280187056_5067702353305869_8974098893566089649_n.jpg',
    },
    {
      imageSrc:
        '../assets/images/292393406_5246543968755039_5947110489787451877_n.jpg',
      imageAlt: '../assets/images/292393406_5246543968755039_5947110489787451877_n.jpg',
    },
  ]



}
