import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CulturalPage } from './cultural.page';

describe('CulturalPage', () => {
  let component: CulturalPage;
  let fixture: ComponentFixture<CulturalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CulturalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
