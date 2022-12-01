import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaImbarcazioneComponent } from './modifica-imbarcazione.component';

describe('ModificaImbarcazioneComponent', () => {
  let component: ModificaImbarcazioneComponent;
  let fixture: ComponentFixture<ModificaImbarcazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaImbarcazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaImbarcazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
