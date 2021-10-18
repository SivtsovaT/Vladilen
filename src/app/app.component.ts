import { Component } from '@angular/core';
export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vladilen';

  public todos = [
    {id:1, title: 'Купить хлеб', completed: false, date: new Date()},
    {id:1, title: 'Купить масло', completed: true, date: new Date()},
    {id:1, title: 'Купить пиво', completed: false, date: new Date()}

  ]
}
