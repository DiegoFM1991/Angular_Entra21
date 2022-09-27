import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaDetalheComponent } from './vacina-detalhe.component';

describe('VacinaDetalheComponent', () => {
  let component: VacinaDetalheComponent;
  let fixture: ComponentFixture<VacinaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinaDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacinaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
