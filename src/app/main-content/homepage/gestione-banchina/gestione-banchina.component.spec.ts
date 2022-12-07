import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneBanchinaComponent } from './gestione-banchina.component';

describe('GestioneBanchinaComponent', () => {
  let component: GestioneBanchinaComponent;
  let fixture: ComponentFixture<GestioneBanchinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneBanchinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneBanchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
