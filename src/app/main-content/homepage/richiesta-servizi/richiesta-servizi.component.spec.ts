import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaServiziComponent } from './richiesta-servizi.component';

describe('RichiestaServiziComponent', () => {
  let component: RichiestaServiziComponent;
  let fixture: ComponentFixture<RichiestaServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichiestaServiziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichiestaServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
