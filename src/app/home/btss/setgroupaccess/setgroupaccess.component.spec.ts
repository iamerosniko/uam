import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetgroupaccessComponent } from './setgroupaccess.component';

describe('SetgroupaccessComponent', () => {
  let component: SetgroupaccessComponent;
  let fixture: ComponentFixture<SetgroupaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetgroupaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetgroupaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
