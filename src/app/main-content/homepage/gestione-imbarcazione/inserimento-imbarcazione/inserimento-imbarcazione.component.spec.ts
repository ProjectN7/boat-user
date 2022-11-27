import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoImbarcazioneComponent } from './inserimento-imbarcazione.component';

describe('InserimentoImbarcazioneComponent', () => {
  let component: InserimentoImbarcazioneComponent;
  let fixture: ComponentFixture<InserimentoImbarcazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoImbarcazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserimentoImbarcazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
