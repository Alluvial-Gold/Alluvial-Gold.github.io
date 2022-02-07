import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MmBoardComponent } from './mastermind/components/mm-board/mm-board.component';

const routes: Routes = [
  {
    path: 'mastermind',
    component: MmBoardComponent,
  },
  {
    path: '',
    redirectTo: '/mastermind',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
