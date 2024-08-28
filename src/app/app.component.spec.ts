import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>',
  styles: []     // Estilos vazios
})
class MockAppComponent {
  title = 'angular-docker';
}

describe('AppComponent', () => {
  let component: MockAppComponent;
  let fixture: ComponentFixture<MockAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MockAppComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'angular-docker' title`, () => {
    expect(component.title).toEqual('angular-docker');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('angular-docker');
  });
});
