import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfodPage } from './infod.page';

describe('InfodPage', () => {
  let component: InfodPage;
  let fixture: ComponentFixture<InfodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
