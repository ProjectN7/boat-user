import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneImbarcazioneComponent } from './gestione-imbarcazione.component';

describe('GestioneImbarcazioneComponent', () => {
  let component: GestioneImbarcazioneComponent;
  let fixture: ComponentFixture<GestioneImbarcazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneImbarcazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneImbarcazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
