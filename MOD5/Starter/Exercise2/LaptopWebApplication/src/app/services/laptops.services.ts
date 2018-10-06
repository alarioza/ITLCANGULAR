import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LaptopService{
  constructor(private http:HttpClient){

  }

  getLaptops=function(){
    return this.http.get('http://localhost/laptopapi/api/laptop/');
  }

}
