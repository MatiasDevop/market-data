import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './product.service';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection!: signalR.HubConnection;

  constructor(private toastr: ToastrService,
     public productService: ProductService) { }

  public startConnection = () =>{
    this.hubConnection =
    new signalR.HubConnectionBuilder()
          .withUrl('https://localhost:7236/Notify', { skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets })
          .build();
    this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while start connection:' + err))
  }

  public addProductListener = () => {
    this.hubConnection.on('ReceiveMessage', (notification: Notification) => {
      console.log('send message........', notification)
      this.showNotification(notification);
      this.productService.get();
    })
  }

  showNotification(notification: Notification){
    this.toastr.warning(notification.message, notification.productId + " " +notification.productName);
  }

  public subscribeToProduct(productID:string){
    this.hubConnection.invoke('SubcribeToProduct', productID);
  }

}
