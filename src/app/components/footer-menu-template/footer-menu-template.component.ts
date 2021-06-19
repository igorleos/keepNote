import { Component, Input, OnInit } from '@angular/core';
import { NoteListControlService } from 'src/app/services/note-list-control.service';
import { NotesModel } from '../notes-model';

@Component({
  selector: 'app-footer-menu-template',
  templateUrl: './footer-menu-template.component.html',
  styleUrls: ['./footer-menu-template.component.css']
})
export class FooterMenuTemplateComponent implements OnInit {

  @Input() public index:number|undefined;
  public listaDeNotas: NotesModel[]|undefined;


  constructor(public notesService:NoteListControlService ) {


   }

  ngOnInit(): void {

    this.listaDeNotas =this.notesService.listaDeNotas;


  }
  passingNote(note:NotesModel):void {
    this.notesService.send(note);
  }
  passingIndex(index:number|undefined):void {
    this.notesService.sendIndex(index);
  }



}
