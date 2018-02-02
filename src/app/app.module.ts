import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { ViewComponent } from './view/view.component';
import { MessageComponent } from './message/message.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CycleRaceDbService } from './shared/cycle-race-db.service';
import { AppListReducer } from './store/app.reducers';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormLanguageComponent } from './header/form-language/form-language.component';
import { LanguageService } from './shared/language.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i118n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InsertComponent,
    ViewComponent,
    MessageComponent,
    FormLanguageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(AppListReducer),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CycleRaceDbService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
