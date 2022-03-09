import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicdInfoComponent } from './cicd-info.component';

describe('CicdInfoComponent', () => {
  let component: CicdInfoComponent;
  let fixture: ComponentFixture<CicdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicdInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
