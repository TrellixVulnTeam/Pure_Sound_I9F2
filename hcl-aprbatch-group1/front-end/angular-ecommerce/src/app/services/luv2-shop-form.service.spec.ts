import { TestBed } from '@angular/core/testing';

import { Luv2ShopFormService } from './luv2-shop-form.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('Luv2ShopFormService', () => {
  let service: Luv2ShopFormService;let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    
    TestBed.configureTestingModule({});
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(Luv2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
