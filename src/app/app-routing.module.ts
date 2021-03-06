import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterMenuTemplateComponent } from './components/footer-menu-template/footer-menu-template.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { NotePageComponent } from './components/note-page/note-page.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';


const routes: Routes = [
  {
    path:'',
    component:MenuTemplateComponent,
    children:[
      {
        path:'',
        component:HomePageComponent,
        

      },


      {
        path:'sobre',
        component:SobrePageComponent,
      },
      {
        path:'notePage',
        component:NotePageComponent,
      }



    ]


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
