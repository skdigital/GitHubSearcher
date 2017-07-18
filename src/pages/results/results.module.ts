import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { ComponentModule } from "../../components/components.module";
 
@NgModule({
  declarations: [ResultsPage],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    ComponentModule],
  exports: [ResultsPage]
})
export class ResultsPageModule {}