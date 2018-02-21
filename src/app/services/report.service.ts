import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Report } from '../models/report.model';
import 'rxjs/add/operator/catch';

 
@Injectable()
export class ReportService {
 
  private serviceUrl = 'http://106.51.56.235:8081/geopulse/bsdlab/api/v1/epatientList';

  //private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) { }
    	public getdata(page:Number):any{
		return this.http.get(this.serviceUrl+'/'+page)
			.map((response:Response) => response)
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}


