import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNhamedevelopComponent } from './app-nhamedevelop.component';

describe('AppNhamedevelopComponent', () => {
  let component: AppNhamedevelopComponent;
  let fixture: ComponentFixture<AppNhamedevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNhamedevelopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNhamedevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
