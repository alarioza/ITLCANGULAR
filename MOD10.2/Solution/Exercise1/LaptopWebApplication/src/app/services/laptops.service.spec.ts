import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController,TestRequest } from '@angular/common/http/testing';
import { LaptopService } from './laptops.services';


describe('Laptop Service',()=>{
    let laptopService:LaptopService;
    let httpTestingController:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[LaptopService]
        });
        laptopService=TestBed.get(LaptopService);
        httpTestingController=TestBed.get(HttpTestingController);
    });

    it('Should GET all the laptops',()=>{
        laptopService.getLaptops().subscribe();
        let laptopRequest:TestRequest=httpTestingController.expectOne('http://localhost/laptopapi/api/laptop/');
        expect(laptopRequest.request.method).toEqual('POST');
        httpTestingController.verify();
    });
});