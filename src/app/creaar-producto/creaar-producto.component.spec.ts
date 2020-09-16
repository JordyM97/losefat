import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaarProductoComponent } from './creaar-producto.component';

describe('CreaarProductoComponent', () => {
  let component: CreaarProductoComponent;
  let fixture: ComponentFixture<CreaarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
