import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmBoardComponent } from './components/mm-board/mm-board.component';
import { MmCheckComponent } from './components/mm-check/mm-check.component';
import { MmIconComponent } from './components/mm-icon/mm-icon.component';
import { MmRowComponent } from './components/mm-row/mm-row.component';
import { RangePipe } from './pipes/range.pipe';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MmBoardComponent,
    MmCheckComponent,
    MmIconComponent,
    MmRowComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class MastermindModule { }
