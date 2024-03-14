import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeportivaPage } from './deportiva.page';

describe('DeportivaPage', () => {
  let component: DeportivaPage;
  let fixture: ComponentFixture<DeportivaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeportivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
