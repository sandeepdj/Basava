import { Component, OnInit,Input,ViewChild,Inject } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { ReportService } from '../../services/report.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Report } from '../../models/report.model';
import {FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {PageEvent} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})


export class ReportsComponent implements OnInit {
	fromdate = new Date();
	todate =  new Date() ;
	today = new Date();
	searchtext:string;
	pleaseWait:boolean=false;
	//pleaseWait:false;
	pageSizeOptions = [5, 10, 20, 25, 100];

	serializedDate = new FormControl((new Date()).toISOString());
	users = [];
  @Input() public tests=[];
	totalItem:number;
	constructor(
		private ReportService: ReportService,
		private datePipe: DatePipe,
		public dialog: MatDialog) { }
	ngOnInit() {
		this.searchtext = '';
		this.getServerData(1,20);
	}
	// MatPaginator Output
	pageEvent: PageEvent;
	setPageSizeOptions(setPageSizeOptionsInput: string) {
	this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}
  public getServerData(pagno,psize){
	this.pleaseWait = true;
	console.log("pageIndex"+ pagno);
	console.log("pageSize"+psize);
		var fromdate = this.datePipe.transform(this.fromdate, 'yyyy-MM-dd');
		var todate = this.datePipe.transform(this.todate, 'yyyy-MM-dd');
		var srctxt = this.searchtext;
		if(this.searchtext){
				srctxt = srctxt;     // answer
		}else{
				 srctxt = 'novalue';
		}
		this.ReportService.getdata(pagno,psize,fromdate,todate,srctxt).subscribe(
			response =>{
				this.pleaseWait = false;
				if(response.error) {

 					console.log('Server Error');
					console.log(response.error);
				} else {
					console.log(response);
					this.users = response.patList;
					this.totalItem = response.total;
					console.log(this.totalItem);
				}
			},
			error =>{
				this.pleaseWait = false;
				console.log(error);
			}
		);
   }



  openDialog(billidh,billidd,ptype) {




  const dialogRef = this.dialog.open(DialogContentExample,
     { height: '350px',
     data: {
        dataKey: this.tests
      }
    }
);
  dialogRef.componentInstance.tests = this.tests;

	this.getTestList(billidh,billidd,ptype);
	dialogRef.afterClosed().subscribe(result => {
	  console.log(`Dialog result: ${result}`);
	});


  }
      getTestList(billidh,billidd,ptype) {
		this.ReportService.getTestdata(billidh,billidd,ptype).subscribe(
			response =>{
 				if(response.error) {
 					console.log('Server Error');
					console.log(response.error);
				} else {
					console.log(response);
					this.tests = response.testList;
  				}
			},
			error =>{
 				console.log(error);
			}
		);
	}
}//END

  @Component({
  	selector: 'app-testlist',
  	templateUrl: 'testsList.dialog.html',
  })
  export class DialogContentExample implements OnInit  {
    //public tests=[];
    constructor(
      @Inject(MAT_DIALOG_DATA) public tests: any){

    }
    ngOnInit() {
      // will log the entire data object
      console.log(this.tests)
    }

  }
