import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Language } from '../Language.model';

import { Store } from '@ngrx/store';
import * as fromAppReducer from '../store/app.reducers';
import * as fromAppListAction from '../store/app.actions';

@Injectable()
export class LanguageService {
  languageList: Language[] = [{ name: 'English', value: 'en' }, { name: 'Italiano', value: 'it' }];
  private languageDefaultValue = 'en';
  languageSelected: string;

  constructor(private translateService: TranslateService, private store: Store<fromAppReducer.State>) {
    this.setupLanguage();
  }

  getSelectedLanguage(): string {
    return this.languageSelected;
  }

  getLanguagesList(): Language[] {
    return this.languageList;
  }

  changeLanguageSelected(newLanguageValue: string) {
    this.store.dispatch(new fromAppListAction.ChangeLanguage(newLanguageValue));
    this.translateService.use(newLanguageValue);
  }

  private setupLanguage() {
    const valueLanguageArray: string[] = this.getLanguagesValue()
    this.translateService.addLangs(valueLanguageArray);
    this.translateService.setDefaultLang(this.languageDefaultValue);

    //The first language to be setup is that of the browser, 
    //but if it isn't present in my list then I use the default language
    let browserLang = this.translateService.getBrowserLang();

    const valueLanguageString: string = valueLanguageArray.join('|');
    this.languageSelected = browserLang.match(/valueLanguageString/) ? browserLang : this.languageDefaultValue
    this.translateService.use(this.languageSelected);
  }

  private getLanguagesValue(): string[] {
    return this.languageList.map((a) => a.value);
  }

}
