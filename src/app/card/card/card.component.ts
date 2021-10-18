import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title = `name`;
  text = `This is my text`;
  textColor = `string`;

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

  changeHandler() {
    console.log(this.title);
  }

}
