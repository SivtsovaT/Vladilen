import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title = `name`;
  number = 42;
  array = [1, 1, 2, 3, 8, 46];
  obj = {name: 'Tania', age: 36, love: {name: 'Ed', age: 49} }
  getInfo() {
    return `This is my info`
  }

imgUrl: string = 'https://thumbs.dreamstime.com/z/angular-logo-editorial-illustrative-white-background-angular-logo-editorial-illustrative-white-background-eps-download-208329119.jpg'
disabled = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://vuejs.org/images/logo.png';
      this.disabled = true;
    }, 2000)
  }

}
