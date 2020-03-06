import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


export const Materials = [
MatCardModule,
MatInputModule,
MatFormFieldModule,
MatButtonModule,
MatGridListModule
];

@NgModule({
  imports: [Materials],
  exports: [Materials]
}
)

export default class MaterialsModule {
constructor() {}

}