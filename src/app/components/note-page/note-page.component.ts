import { Component, Input, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {
  public listaDeNotas: NotesModel[];
  public newNote= new NotesModel();

  public index:number;
  constructor(public notesService:NoteListControlService) {
    this.index=Number(this.notesService.getIndex());
    if (this.index==-1){
      this.newNote= new NotesModel();
      this.newNote.content='';
      this.newNote.flags=[];
      this.newNote.titulo='';

    }


    this.listaDeNotas = [];



    console.log(this.index);


   }

  ngOnInit(): void {
    this.listaDeNotas=this.notesService.listaDeNotas;
    if(this.index==-1){
      this.index=this.listaDeNotas.length
      this.listaDeNotas.push(this.newNote);

    }


  }

}
