import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  coinAmount = 0;
  logs = [];
  constructor(private _http: HttpClient) { }
  shareAmount(){
    return this.coinAmount;
  }
  addToCoinAmount(num){
    let number = Math.floor(Math.random()*9999);
    this.coinAmount += num;
    this.logs.push({action: 'Bought', amount: num, value: this.coinAmount, id: number});
    return this.coinAmount;
  }
  mine(){
    let number = Math.floor(Math.random()*9999);
    this.coinAmount += 1;
    this.logs.push({action: 'Mined', amount: 1, value: this.coinAmount, id: number});
    return this.coinAmount;
  }
  minusToCoinAmount(num){
    let number = Math.floor(Math.random()*9999);
    this.coinAmount -= num;
    this.logs.push({action: 'Sold', amount: num, value: this.coinAmount, id: number});
    return this.coinAmount;
  }
  viewLogs(){
    return this.logs;
  }
  getLog(id){
    for(let x in this.logs){
      if(this.logs[x].id == id){
        return this.logs[x];
      }
    }
  }
}
