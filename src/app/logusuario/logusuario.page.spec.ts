import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogusuarioPage } from './logusuario.page';

describe('LogusuarioPage', () => {
  let component: LogusuarioPage;
  let fixture: ComponentFixture<LogusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
