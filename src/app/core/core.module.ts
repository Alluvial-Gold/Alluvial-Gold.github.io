import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './components/frame/frame.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FrameComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  exports: [
    FrameComponent,
  ]
})
export class CoreModule { }
