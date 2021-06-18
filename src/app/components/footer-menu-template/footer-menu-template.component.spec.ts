import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuTemplateComponent } from './footer-menu-template.component';

describe('FooterMenuTemplateComponent', () => {
  let component: FooterMenuTemplateComponent;
  let fixture: ComponentFixture<FooterMenuTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMenuTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMenuTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
