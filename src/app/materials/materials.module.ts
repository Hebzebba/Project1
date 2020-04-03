import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRadioModule } from "@angular/material/radio";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";

export const Materials = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatGridListModule,
  MatRadioModule,
  MatToolbarModule,
  MatMenuModule
];

@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export default class MaterialsModule {
  constructor() {}
}
