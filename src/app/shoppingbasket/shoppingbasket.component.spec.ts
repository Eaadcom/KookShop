import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingbasketComponent } from './shoppingbasket.component';

describe('ShoppingbasketComponent', () => {
  let component: ShoppingbasketComponent;
  let fixture: ComponentFixture<ShoppingbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingbasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
