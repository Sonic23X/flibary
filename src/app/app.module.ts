import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AuthorComponent } from './pages/admin/author/author.component';
import { BookComponent } from './pages/admin/book/book.component';
import { UserComponent } from './pages/admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    CategoryComponent,
    AuthorComponent,
    BookComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
