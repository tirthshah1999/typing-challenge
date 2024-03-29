import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-challenge';
  randomText = lorem.sentence();
  enteredText = '';

  onCheck(value: string){
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return "pending";
    }

    return randomLetter === enteredLetter ? "success" : "error";
  }
}
