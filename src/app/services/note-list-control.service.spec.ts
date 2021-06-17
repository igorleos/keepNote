import { TestBed } from '@angular/core/testing';

import { NoteListControlService } from './note-list-control.service';

describe('NoteListControlService', () => {
  let service: NoteListControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteListControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
