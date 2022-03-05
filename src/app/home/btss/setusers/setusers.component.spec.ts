import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetusersComponent } from './setusers.component';

describe('SetusersComponent', () => {
  let component: SetusersComponent;
  let fixture: ComponentFixture<SetusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
