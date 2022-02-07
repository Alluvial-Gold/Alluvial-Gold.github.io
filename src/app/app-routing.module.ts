import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './core/components/frame/frame.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TestComponent } from './core/components/test/test.component';

const routes: Routes = [
  {
    path: 'home',
    component: TestComponent
  },
  {
    path: '',
    redirectTo: '/home',
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
