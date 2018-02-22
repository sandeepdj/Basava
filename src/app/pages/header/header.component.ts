import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,  
    private route: ActivatedRoute,
    private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logoutUser(){
    this.auth.logout() ;
  }

  

}
