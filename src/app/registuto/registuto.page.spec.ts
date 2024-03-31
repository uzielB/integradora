import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistutoPage } from './registuto.page';

describe('RegistutoPage', () => {
  let component: RegistutoPage;
  let fixture: ComponentFixture<RegistutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
