import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../shared/language.service';
import { Language } from '../../Language.model';

@Component({
  selector: 'app-form-language',
  templateUrl: './form-language.component.html',
  styleUrls: ['./form-language.component.css']
})
export class FormLanguageComponent implements OnInit {
  languageForm: FormGroup;
  languageValue: Language[];

  constructor(private languageService: LanguageService) {
    this.languageValue = languageService.getLanguagesList();

    this.languageForm = new FormGroup({
      language: new FormControl(languageService.getSelectedLanguage())
    });

    //this method is Observable
    this.languageForm.statusChanges.subscribe(() => this.onSelectLanguage());

  }

  ngOnInit() {
  }

  private onSelectLanguage() {
    const valueSelect: string = this.languageForm.value.language;
    this.languageService.changeLanguageSelected(valueSelect);
  }

}
