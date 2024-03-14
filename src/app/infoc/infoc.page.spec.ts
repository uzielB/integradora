import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfocPage } from './infoc.page';

describe('InfocPage', () => {
  let component: InfocPage;
  let fixture: ComponentFixture<InfocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
