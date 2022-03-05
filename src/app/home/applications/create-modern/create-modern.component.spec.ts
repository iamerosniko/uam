import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModernComponent } from './create-modern.component';

describe('CreateModernComponent', () => {
  let component: CreateModernComponent;
  let fixture: ComponentFixture<CreateModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
