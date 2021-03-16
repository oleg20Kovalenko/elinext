import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CloudComponent } from './cloud/cloud.component';
import { ImgSearchComponent } from './img-search/img-search.component';

const routes: Routes = [
  { path: '', component: ImgSearchComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'book', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
