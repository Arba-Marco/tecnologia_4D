import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { foocomponent } from './foo/foo.component'; //Importa Il modulo http
@NgModule({
  declarations: [
    AppComponent,
    foocomponent
  ],
  imports: [
    BrowserModule , HttpClientModule //Aggiungi il modulo http qui 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
