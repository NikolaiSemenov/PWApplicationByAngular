import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [InputTextModule, CheckboxModule, ButtonModule],
  exports: [InputTextModule, CheckboxModule, ButtonModule]
})
export class PrimengModule {}
