import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioApagarComponent } from './usuario-apagar.component';

describe('UsuarioApagarComponent', () => {
  let component: UsuarioApagarComponent;
  let fixture: ComponentFixture<UsuarioApagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioApagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
