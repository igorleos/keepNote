import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';


const routes: Routes = [
  {
    path:'',
    component:MenuTemplateComponent,
    children:[
      {
        path:'',
        component:HomePageComponent,
      }


    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
