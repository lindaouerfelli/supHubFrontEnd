import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReservationComponent } from './message-reservation.component';

describe('MessageReservationComponent', () => {
  let component: MessageReservationComponent;
  let fixture: ComponentFixture<MessageReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
