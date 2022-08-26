import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'research';
  images = [
    {
      imageSrc:
        '../../src/assets/images/Sport Management014.jpg',
      imageAlt: '../../src/assets/images/Sport Management014.jpg',
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
