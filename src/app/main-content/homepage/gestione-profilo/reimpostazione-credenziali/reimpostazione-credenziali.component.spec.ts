import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimpostazioneCredenzialiComponent } from './reimpostazione-credenziali.component';

describe('ReimpostazioneCredenzialiComponent', () => {
  let component: ReimpostazioneCredenzialiComponent;
  let fixture: ComponentFixture<ReimpostazioneCredenzialiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimpostazioneCredenzialiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimpostazioneCredenzialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
