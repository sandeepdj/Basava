import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { ReportService } from '../../services/report.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Report } from '../../models/report.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})


export class ReportsComponent implements OnInit {
  date = new FormControl(new Date());
	serializedDate = new FormControl((new Date()).toISOString());
	
	
  users = [];
  totalItem:number;
     constructor(private ReportService: ReportService) { }
  
  ngOnInit() { 
    this.getServerData(1);
   
 
  }
  public getServerData(event){
		this.ReportService.getdata(event).subscribe(
			response =>{
				if(response.error) { 
					console.log('Server Error');
					console.log(response.error);
				} else {
					this.users = response.patList;
					this.totalItem = response.total;
				}
			},
			error =>{
				console.log(error);
			}
		);
		return event;
  }
  

}
 