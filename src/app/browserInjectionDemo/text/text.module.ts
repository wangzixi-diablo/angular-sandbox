import { NgModule } from '@angular/core';

import { JoinPipe } from './join.pipe';
import { ReplacePipe } from './replace.pipe';
import { SplitPipe } from './split.pipe';
import { TrimPipe } from './trim.pipe';

@NgModule({
  declarations: [
    JoinPipe,
    ReplacePipe,
    SplitPipe,
    TrimPipe,
  ],
  exports: [
    JoinPipe,
    ReplacePipe,
    SplitPipe,
    TrimPipe,
  ],
})
export class TextModule {}
