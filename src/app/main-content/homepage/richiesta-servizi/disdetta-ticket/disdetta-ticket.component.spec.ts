import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisdettaTicketComponent } from './disdetta-ticket.component';

describe('DisdettaTicketComponent', () => {
  let component: DisdettaTicketComponent;
  let fixture: ComponentFixture<DisdettaTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisdettaTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisdettaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
