import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
	
import { FormsModule } from '@angular/forms' ;
import { ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { environment } from 'src/environments/environment.prod';


describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(async () => {
    window.Stripe = function () {
      // your mock here
      return {
        elements: () => ({
          create: () => ({
            mount: () => ({ }),
            on: () =>({})
          })
        })
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
    
      imports: [ HttpClientTestingModule,ReactiveFormsModule,//Add if needed 
      FormsModule,RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
    function async(arg0: () => void): jasmine.ImplementationCallback {
      throw new Error('Function not implemented.');
    }