import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthorComponent } from './pages/admin/author/author.component';
import { BookComponent } from './pages/admin/book/book.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { UserComponent } from './pages/admin/user/user.component';

const routes: Routes = [
  { path: "", redirectTo: "chat", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "chat", component: ChatComponent },
  { path: "admin/autores", component: AuthorComponent },
  { path: "admin/libros", component: BookComponent },
  { path: "admin/categorias", component: CategoryComponent },
  { path: "admin/usuarios", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
