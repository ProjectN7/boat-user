import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellazioneImbarcazioneComponent } from './cancellazione-imbarcazione.component';

describe('CancellazioneImbarcazioneComponent', () => {
  let component: CancellazioneImbarcazioneComponent;
  let fixture: ComponentFixture<CancellazioneImbarcazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellazioneImbarcazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellazioneImbarcazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
