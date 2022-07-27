import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirMensagemComponent } from './exibir-mensagem.component';

describe('ExibirMensagemComponent', () => {
  let component: ExibirMensagemComponent;
  let fixture: ComponentFixture<ExibirMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirMensagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
