import { NgModule } from '@angular/core';
import { DrMapComponent } from './dr-map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DrMapComponent],
  imports: [HttpClientModule],
  exports: [DrMapComponent],
})
export class DrMapModule {}
