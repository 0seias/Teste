import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMasternhameComponent } from './app-masternhame.component';

describe('AppMasternhameComponent', () => {
  let component: AppMasternhameComponent;
  let fixture: ComponentFixture<AppMasternhameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMasternhameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMasternhameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
