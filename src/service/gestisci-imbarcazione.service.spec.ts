import { TestBed } from '@angular/core/testing';

import { GestisciImbarcazioneService } from './gestisci-imbarcazione.service';

describe('GestisciImbarcazioneService', () => {
  let service: GestisciImbarcazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestisciImbarcazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
