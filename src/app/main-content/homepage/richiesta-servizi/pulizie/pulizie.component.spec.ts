import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulizieComponent } from './pulizie.component';

describe('PulizieComponent', () => {
  let component: PulizieComponent;
  let fixture: ComponentFixture<PulizieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulizieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulizieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
