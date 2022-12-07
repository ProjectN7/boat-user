import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisdettaBanchinaComponent } from './disdetta-banchina.component';

describe('DisdettaBanchinaComponent', () => {
  let component: DisdettaBanchinaComponent;
  let fixture: ComponentFixture<DisdettaBanchinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisdettaBanchinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisdettaBanchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
