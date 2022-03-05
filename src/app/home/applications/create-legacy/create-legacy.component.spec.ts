import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLegacyComponent } from './create-legacy.component';

describe('CreateLegacyComponent', () => {
  let component: CreateLegacyComponent;
  let fixture: ComponentFixture<CreateLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLegacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
