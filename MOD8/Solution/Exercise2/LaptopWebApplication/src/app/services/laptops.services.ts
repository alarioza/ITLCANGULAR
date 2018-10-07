import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class LaptopService{
  constructor(private http:HttpClient){

  }

  getLaptops=function(){
    return this.http.get('http://localhost/laptopapi/api/laptop/');
  }

  postReviews = function(laptopReviews){
    let headers =new HttpHeaders({'Content-type':'application/json'});
    return this.http.post('http://localhost/laptopapi/api/reviews',laptopReviews,headers);
  }
}
