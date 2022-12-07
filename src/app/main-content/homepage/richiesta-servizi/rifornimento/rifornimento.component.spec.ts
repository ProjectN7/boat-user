import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifornimentoComponent } from './rifornimento.component';

describe('RifornimentoComponent', () => {
  let component: RifornimentoComponent;
  let fixture: ComponentFixture<RifornimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifornimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RifornimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
