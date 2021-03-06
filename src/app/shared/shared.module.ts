import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng.module';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule],
  exports: [CommonModule, PrimengModule, FormsModule]
})
export class SharedModule {}
