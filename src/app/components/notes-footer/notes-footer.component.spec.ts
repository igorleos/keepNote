import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFooterComponent } from './notes-footer.component';

describe('NotesFooterComponent', () => {
  let component: NotesFooterComponent;
  let fixture: ComponentFixture<NotesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
