import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodSelectionComponent } from './mood-selection.page';

describe('MoodSelectionComponent', () => {
  let component: MoodSelectionComponent;
  let fixture: ComponentFixture<MoodSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoodSelectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
