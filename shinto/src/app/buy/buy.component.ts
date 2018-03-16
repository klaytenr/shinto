import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
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
  addToAmount(){
    if(this.num > 0){
      this.coinAmount = this._httpService.addToCoinAmount(this.num);
      this.logs.push({action: 'Bought', amount: this.num, value: this.coinAmount});
    }
  }
}
