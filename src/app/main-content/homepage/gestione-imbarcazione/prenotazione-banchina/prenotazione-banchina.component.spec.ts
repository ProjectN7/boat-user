import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneBanchinaComponent } from './prenotazione-banchina.component';

describe('PrenotazioneBanchinaComponent', () => {
  let component: PrenotazioneBanchinaComponent;
  let fixture: ComponentFixture<PrenotazioneBanchinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenotazioneBanchinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotazioneBanchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
