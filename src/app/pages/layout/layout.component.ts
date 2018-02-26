import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

	sessData:any={};   
  constructor() { }

  ngOnInit() {
    this.sessData = JSON.parse(sessionStorage.getItem('currentUser'));
    var sponIds =  this.sessData.uid;

  }

}
