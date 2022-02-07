import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './components/frame/frame.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../material.module';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FrameComponent,
    PageNotFoundComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    FrameComponent,
  ]
})
export class CoreModule { }
