import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/Account';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private httpClient: HttpClient) { }

  searchAccount(accountNumber: any) :Observable<any> {
   const httpHeaders={

    headers : new HttpHeaders({

       'accountnumber': 'accountNumber',
       'Content-Type': 'application/json',
       'Accept': 'application/json'


    })
   };


    return this.httpClient.get("http://localhost:8080/api/searchAccount",httpHeaders);
  }


}
