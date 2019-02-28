import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitiesPage } from './qualities.page';

describe('QualitiesPage', () => {
  let component: QualitiesPage;
  let fixture: ComponentFixture<QualitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
