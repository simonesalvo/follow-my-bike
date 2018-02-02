import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CycleRaceDbService } from '../shared/cycle-race-db.service';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  cycleRaceForm: FormGroup;
  submitValueValid = false;

  private todayDate = '';

  get stageControl(): AbstractControl {
    return this.cycleRaceForm.get('stage');
  }

  constructor(private cycleRaceDbService: CycleRaceDbService) {
    this.calculateTodayDate();
    this.cycleRaceForm = new FormGroup({
      stage: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      date: new FormControl(this.todayDate),
      comment: new FormControl('', [Validators.required])
    });

    //this method is Observable
    this.cycleRaceForm.statusChanges.subscribe(() => this.onSubmit());
  }

  ngOnInit() {
  }

  public getResult(event) {

    if (event) {
      const formValue = this.cycleRaceForm.value;
      this.cycleRaceDbService.insertRace(formValue);
      console.log("SAVE");
    } else {
      console.log("CANCEL");
    }

    this.onReset();
  }

  private onSubmit() {
    if (this.submitIsValid()) {
      this.messageConfirm();
    }
  }

  private messageConfirm() {
    this.submitValueValid = true;
  }

  private submitIsValid(): boolean {
    const lastCharacter: string = this.cycleRaceForm.value.comment;

    return (this.cycleRaceForm.valid && lastCharacter.lastIndexOf('#') > -1);
  }

  onReset() {
    this.cycleRaceForm.reset();
    this.cycleRaceForm.controls['date'].setValue(this.todayDate);
    this.submitValueValid = false;
  }

  private calculateTodayDate() {
    const today = new Date();
    const month = today.getUTCMonth() + 1;
    const day = today.getUTCDate();
    const year = today.getUTCFullYear();

    this.todayDate = year + '-' + month + '-' + day;
  }

}
