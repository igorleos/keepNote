import { Component, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public listaDeNotas: NotesModel[]|undefined;

  constructor(public notesService:NoteListControlService ) {


   }

  ngOnInit(): void {

    this.listaDeNotas =this.notesService.listaDeNotas;


  }

}
