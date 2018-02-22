import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  model: any = {};
  loading = false;
  returnUrl: string;
  erroMessage:string;
  constructor(
      private router:Router,  
      private route: ActivatedRoute,
      private auth: AuthenticationService) { }

  ngOnInit() {
       // reset login status
       this.auth.logout();
       // get return url from route parameters or default to '/'
       this.returnUrl ='';
  }
 
  doLogin() {
    let body = JSON.stringify(this.model);
    this.loading = true;
    this.auth.login(body)
        .subscribe(
            data => {
              this.loading = false;
              if(data.status=='success'){
                console.log("success");
                
                this.router.navigate(['Basava']);
              }else{
                this.erroMessage = data.message;
              }
             },
            error => {
                this.loading = false;
            });
  }


}
