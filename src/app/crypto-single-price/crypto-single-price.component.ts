import { Component } from '@angular/core';
import { CryptoResponse } from '../crypto-response';
import { CryptoApiService } from '../crypto-api.service';

@Component({
  selector: 'app-crypto-single-price',
  templateUrl: './crypto-single-price.component.html',
  styleUrls: ['./crypto-single-price.component.css']
})
export class CryptoSinglePriceComponent {
  isReady : boolean = false

  response! : CryptoResponse

  constructor(private srv : CryptoApiService) {}

  fetchResponse(){
    let url : string = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"
    this.srv.fetchResponse(url).subscribe(
      {

          next : (value : CryptoResponse) => {this.response = value},
          complete : ()=>{this.isReady = true; console.log('FINISHED') }

      }
    )
  }
}
