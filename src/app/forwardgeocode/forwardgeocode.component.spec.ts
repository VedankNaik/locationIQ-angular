import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardgeocodeComponent } from './forwardgeocode.component';

describe('ForwardgeocodeComponent', () => {
  let component: ForwardgeocodeComponent;
  let fixture: ComponentFixture<ForwardgeocodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardgeocodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardgeocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
