import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarField } from './star-field.component';

describe('StarField', () => {
  let component: StarField;
  let fixture: ComponentFixture<StarField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarField],
    }).compileComponents();

    fixture = TestBed.createComponent(StarField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
