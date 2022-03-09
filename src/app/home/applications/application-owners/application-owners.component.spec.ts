import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOwnersComponent } from './application-owners.component';

describe('ApplicationOwnersComponent', () => {
  let component: ApplicationOwnersComponent;
  let fixture: ComponentFixture<ApplicationOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationOwnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
