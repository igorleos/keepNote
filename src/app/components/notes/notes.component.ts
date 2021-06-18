import { Component, Input, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() public notes: NotesModel = new NotesModel();







  constructor(public notesService:NoteListControlService) {
  }

  ngOnInit(): void {
  }
  passingNote(note:NotesModel):void {
    this.notesService.send(note);
  }

}
