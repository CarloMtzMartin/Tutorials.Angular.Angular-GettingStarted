import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormulasComponent } from './formulas/formulas.component';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'formulas', component:FormulasComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
      
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
