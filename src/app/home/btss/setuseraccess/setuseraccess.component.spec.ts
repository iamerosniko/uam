import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetuseraccessComponent } from './setuseraccess.component';

describe('SetuseraccessComponent', () => {
  let component: SetuseraccessComponent;
  let fixture: ComponentFixture<SetuseraccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetuseraccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetuseraccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
