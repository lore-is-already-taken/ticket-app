import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerqueueComponent } from './tickerqueue.component';

describe('TickerqueueComponent', () => {
  let component: TickerqueueComponent;
  let fixture: ComponentFixture<TickerqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickerqueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickerqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
