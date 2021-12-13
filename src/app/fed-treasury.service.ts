import { Injectable } from '@angular/core';
// import { FedTreasury } from './fed-treasury/fed-treasury.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FedTreasuryService {

  constructor(private http: HttpClient) { }

  getGoldReserve(): Observable<any>{
    const data = this.http.get('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/gold_reserve');
    return data;
  }

}
