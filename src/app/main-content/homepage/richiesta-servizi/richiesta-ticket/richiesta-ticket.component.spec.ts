import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaTicketComponent } from './richiesta-ticket.component';

describe('RichiestaTicketComponent', () => {
  let component: RichiestaTicketComponent;
  let fixture: ComponentFixture<RichiestaTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichiestaTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichiestaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
