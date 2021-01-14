import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('home', { static: true }) homeMenuItem: ElementRef;
  @ViewChild('articles', { static: true}) articlesMenuItem: ElementRef;

  constructor() { }

  ngOnInit(): void {}

}
