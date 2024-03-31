import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutoadminPage } from './tutoadmin.page';

describe('TutoadminPage', () => {
  let component: TutoadminPage;
  let fixture: ComponentFixture<TutoadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutoadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
