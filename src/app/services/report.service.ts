import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Report } from '../models/report.model';
import 'rxjs/add/operator/catch';

 
@Injectable()
export class ReportService {
 
  private serviceUrl = 'http://106.51.56.235:8081/geopulse/geo/api/v1/';

  //private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) { }


    	public getdata(page:Number,pageSize:Number,fromDate:String,toDate:String,srcText:string):any{
		return this.http.get(this.serviceUrl+'epatientList'+'/'+page+'/'+fromDate+'/'+toDate+'/'+srcText+'/'+pageSize)
			.map((response:Response) => response)
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

	public getTestdata(billidh:Number,billidd:Number,ptype:String):any{
		return this.http.get(this.serviceUrl+'extestDetails'+'/'+billidh+'/'+billidd+'/'+ptype)
			.map((response:Response) => response)
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}


 
}


