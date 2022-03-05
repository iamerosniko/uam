import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetgroupsComponent } from './setgroups.component';

describe('SetgroupsComponent', () => {
  let component: SetgroupsComponent;
  let fixture: ComponentFixture<SetgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
