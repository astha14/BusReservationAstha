import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterCustomer } from './register-customer';

@Injectable({
  providedIn: 'root'
})
export class BusService {
 
  private url="http://localhost:5000/api/RegCustomer";
  constructor(public client:HttpClient) { }
    
  HttpOptions = {​​​​​​
    headers:new HttpHeaders({​​​​​​
  'Content-Type':'application/json'
    }​​​​​​)
  }​​​​​​
  Get():Observable<RegisterCustomer[]>{
    return this.client.get<RegisterCustomer[]>(this.url);
  }
  /* GetCustomerByUserName(Username:string){
    return this.client.get<RegisterCustomer>(this.url+'/'+Username);
  } */
/* Register(customer:RegisterCustomer){

  return this.client.post(this.url,JSON.stringify(customer),this.HttpOptions);
} */
Register(customer:RegisterCustomer)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.client.post<RegisterCustomer[]>(this.url , customer, httpOptions)  
   }

}
