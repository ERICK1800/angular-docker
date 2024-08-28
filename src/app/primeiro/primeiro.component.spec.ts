import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PrimeiroComponent } from './primeiro.component';

// Cria um componente mock com template e estilo vazios
@Component({
  selector: 'app-primeiro',
  template: '',  // Template vazio
  styles: []     // Estilos vazios
})
class MockPrimeiroComponent {}

describe('PrimeiroComponent', () => {
  let component: MockPrimeiroComponent;
  let fixture: ComponentFixture<MockPrimeiroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MockPrimeiroComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
