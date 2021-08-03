import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversegeocodeComponent } from './reversegeocode.component';

describe('ReversegeocodeComponent', () => {
  let component: ReversegeocodeComponent;
  let fixture: ComponentFixture<ReversegeocodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversegeocodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversegeocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
