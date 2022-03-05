import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmoduleComponent } from './setmodule.component';

describe('SetmoduleComponent', () => {
  let component: SetmoduleComponent;
  let fixture: ComponentFixture<SetmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
