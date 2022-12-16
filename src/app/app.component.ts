import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { Fields, MarketData } from './models/market-data.model';
import { AuthService } from './services/authenticaion.service';
import { MarketDataService } from './services/market-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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

  private subscription!: Subscription; //new Subscription();
  timer$: Observable<number> = timer(0, 1000);

  constructor(private marketService: MarketDataService, private authService:AuthService) {
  }

  ngOnInit(): void {

    // this.subscription = this.timer$
    // .subscribe(secondsElapsed => console.log(secondsElapsed));

    // this.authService.getToken().subscribe(authModel => {
    //   this.token = authModel.access_token;
    //   this.getMarketData(this.token)
    // })
  }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   //this.subscription.unsubscribe();
  // }

  // private getMarketData(token?:string){
  //   this.marketService.GetMarketData(token).subscribe(
  //     (res: MarketData) => {
  //      this.fields = res.quotes[0].fields;
  //   })
  // }
}
