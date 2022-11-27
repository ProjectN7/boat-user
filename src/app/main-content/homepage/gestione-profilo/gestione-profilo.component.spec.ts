import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneProfiloComponent } from './gestione-profilo.component';

describe('GestioneProfiloComponent', () => {
  let component: GestioneProfiloComponent;
  let fixture: ComponentFixture<GestioneProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneProfiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
