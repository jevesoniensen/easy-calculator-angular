import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAccountEntriesComponent } from './table-account-entries/table-account-entries.component';


const routes: Routes = [{path: '', component: TableAccountEntriesComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
