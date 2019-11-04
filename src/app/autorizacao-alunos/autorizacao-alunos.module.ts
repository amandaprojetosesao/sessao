import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutorizacaoAlunosPage } from './autorizacao-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizacaoAlunosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutorizacaoAlunosPage]
})
export class AutorizacaoAlunosPageModule {}
