import { TestBed } from '@angular/core/testing';

import { GestioneImbarcazioneService } from './gestisci-imbarcazione.service';

describe('GestisciImbarcazioneService', () => {
  let service: GestioneImbarcazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneImbarcazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
