import { Component, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {
  public curNote:NotesModel|undefined;
  constructor(public notesService:NoteListControlService) { }

  ngOnInit(): void {
    this.curNote=this.notesService.getNote();
    
  }

}
