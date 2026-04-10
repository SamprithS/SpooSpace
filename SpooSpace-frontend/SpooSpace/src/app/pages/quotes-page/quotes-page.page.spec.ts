import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesPageComponent } from './quotes-page.page';

describe('QuotesPageComponent', () => {
  let component: QuotesPageComponent;
  let fixture: ComponentFixture<QuotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
