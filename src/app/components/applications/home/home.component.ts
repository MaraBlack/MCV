import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

img = "home"
img2="linkedin"
remove = true;
  constructor() { }

  ngOnInit(): void {
  }

}
