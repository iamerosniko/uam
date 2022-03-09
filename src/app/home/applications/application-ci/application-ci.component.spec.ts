import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCiComponent } from './application-ci.component';

describe('ApplicationCiComponent', () => {
  let component: ApplicationCiComponent;
  let fixture: ComponentFixture<ApplicationCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationCiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
