import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoadminComponent } from './productoadmin.component';

describe('ProductoadminComponent', () => {
  let component: ProductoadminComponent;
  let fixture: ComponentFixture<ProductoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
