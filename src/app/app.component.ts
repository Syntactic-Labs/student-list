import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 {color: blue;}']
})
export class AppComponent implements OnInit {
  title = 'Noodles';
  name: string = "";
  display: boolean = false;
  subject: any = null;

  colors: any[]= [
    "red","white", "blue", "yellow", "green"
  ]

  clicked(): void {
    this.title = "Fred's student list";
  }
  unclicked(): void {
    this.title = "Noodles";
  }

  ngOnInit(): void {
    console.debug("This is a debug message")
  }
}

