import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

const AppRoutes: Routes = [
    { path: '', component: LoginFormComponent },
    { path: 'cadastro', component: CadastroPessoaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
