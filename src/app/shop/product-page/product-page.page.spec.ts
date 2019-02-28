import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPagePage } from './product-page.page';

describe('ProductPagePage', () => {
  let component: ProductPagePage;
  let fixture: ComponentFixture<ProductPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
