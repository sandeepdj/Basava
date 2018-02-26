import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sessData:any={};
  sponName:string;

  constructor(
    private router:Router,  
    private route: ActivatedRoute,
    private auth: AuthenticationService) { }

  ngOnInit() {
    
  this.sessData = JSON.parse(sessionStorage.getItem('currentUser'));
  this.sponName =  this.sessData.name;
  }

  logoutUser(){
    console.log("I am logged out");
    this.auth.logout() ;
  }

  

}
