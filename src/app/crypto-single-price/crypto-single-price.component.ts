import { Component } from '@angular/core';
import { CryptoResponse } from '../crypto-response';
import { CryptoApiService } from '../crypto-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crypto-single-price',
  templateUrl: './crypto-single-price.component.html',
  styleUrls: ['./crypto-single-price.component.css']
})
export class CryptoSinglePriceComponent {
  isReady : boolean = false
  currencyName : string = ""
  response! : CryptoResponse

  constructor(private srv : CryptoApiService, private activeRoute : ActivatedRoute) {}

  fetchResponse(){
    let url : string = `https://min-api.cryptocompare.com/data/price?fsym=${this.currencyName}&tsyms=USD,JPY,EUR`
    this.srv.fetchResponse(url).subscribe(
      {
          next : (value : CryptoResponse) => {this.response = value},
          complete : ()=>{this.isReady = true; console.log('FINISHED') }
      }
    )
  }

  ngOnInit(){
    //this refers to object of Component class
    let queryData = this.activeRoute.queryParamMap.subscribe(
    (params)=>{
        console.log(params);//for debugging
        //value is whatever currencyName query parameter has as a value in the address URL
        let value = params.get("currencyName")
        if(value != null){
        this.currencyName = value
        }
        else{
          this.currencyName = "BTC"
        }

        this.fetchResponse()
      }
    )
  }
}




// http://localhost:4200/crypto?currencyName=BTC