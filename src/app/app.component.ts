import { Component } from '@angular/core';
import { Fields, MarketData } from './models/market-data.model';
import { AuthService } from './services/authenticaion.service';
import { MarketDataService } from './services/market-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketdata-app';
  last:string = "Last";
  close:string = "Close";
  dayChange1:string = "Day Change %";
  dayChange2:string = "Day Change ";
  volume:string = "Volume";
  turnOver:string = "Turnover";
  previusYearClose:string = "Previous year close";
  ytd:string = "YTD %";
  fields: Fields | undefined;
  token:string | undefined;
  constructor(private marketService: MarketDataService, private authService:AuthService) {
  }

  ngOnInit(): void {
    this.authService.getToken().subscribe(authModel => {
      this.token = authModel.access_token;
      this.getMarketData(this.token)
    })
  }

  private getMarketData(token?:string){
    this.marketService.GetMarketData(token).subscribe(
      (res: MarketData) => {
       this.fields = res.quotes[0].fields;
    })
  }
}
