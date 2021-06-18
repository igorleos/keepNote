import { Component, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {
  public listaDeNotas: NotesModel[];

  public index:number;
  constructor(public notesService:NoteListControlService) {
    this.listaDeNotas = [];
    this.index=Number(this.notesService.getIndex());
    console.log(this.index);

   }

  ngOnInit(): void {
    this.listaDeNotas=this.notesService.listaDeNotas;


  }

}
