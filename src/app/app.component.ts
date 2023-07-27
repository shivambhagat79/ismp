import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ismp';

  scroll: LocomotiveScroll;

  constructor() {}

  ngOnInit() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
  }
}
