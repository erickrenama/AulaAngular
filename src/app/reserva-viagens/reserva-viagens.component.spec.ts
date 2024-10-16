import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaViagensComponent } from './reserva-viagens.component';

describe('ReservaViagensComponent', () => {
  let component: ReservaViagensComponent;
  let fixture: ComponentFixture<ReservaViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
