import { NgModule, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { range } from 'rxjs/observable/range';
import { map, take, toArray } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  @Output() result = new EventEmitter<boolean>();

  time: number = 3;

  constructor() {

    interval(1000).pipe(
      take(this.time)
    ).subscribe(x => {
      this.time--;
      if (this.time == 0) {
        this.result.emit(true);
      }
    })

  }

  ngOnInit() {
  }

  onCancel() {
    
    this.result.emit(false);
  }


}
