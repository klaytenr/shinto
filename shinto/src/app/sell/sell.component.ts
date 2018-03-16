import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  coinAmount = 0;
  num: number;
  logs = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAmount();
  }
  getAmount(){
    this.coinAmount = this._httpService.shareAmount();
  }
  minusFromAmount(){
    if(this.coinAmount >= this.num){
      this.coinAmount = this._httpService.minusToCoinAmount(this.num);
      this.logs.push({action: 'Sold', amount: this.num, value: this.coinAmount});
    }else{
      console.log('not enough coin');
    }
  }
}
