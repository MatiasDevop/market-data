import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketData } from '../models/market-data.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MarketDataService {

    apiUrl: string = 'https://integra1.solutions.webfg.ch/restweb/quotes/2970161-1058-814?fields=LVAL_NORM,CLOSE_ADJ_NORM,NC2_PR_NORM,NC2_NORM,VOL,TUR,PY_CLOSE,YTD_PR_NORM';

    constructor(private httpClient: HttpClient) { }

    public GetMarketData(token?:string): Observable<MarketData> {
        return this.httpClient.get<MarketData>(this.apiUrl, {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
    }

}
