import { Component, OnInit, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-text-rotator',
  templateUrl: './text-rotator.component.html',
  styleUrls: ['./text-rotator.component.scss']
})
export class TextRotatorComponent implements OnDestroy, AfterViewInit {

  constructor() { }

  private sub: Subscription
  word:any
  ngAfterViewInit() {
    this.sub = interval(800)
      .subscribe((val) => { this.rotator() });
      let text = document.getElementById('text');
      this.word = text.getElementsByTagName('span');

  }
 i = 0;

  rotator() {

     this.word[this.i].style.display = 'none';
  this.i = (this.i + 1) % this.word.length;
  this.word[this.i].style.display = 'initial';
    console.log("Called",this.i)
  }

  ngOnDestroy() {
    if (this.sub && this.sub !== undefined) this.sub.unsubscribe()
  }

}

// <script type="text/javascript">
// var text = document.getElementById('text');
// var word = text.getElementsByTagName('span');

// var i = 0;

// function rotator(){
//   word[i].style.display = 'none';
//   i = (i + 1) % word.length;
//   word[i].style.display = 'initial';
// }
// setInterval(rotator, 800);
// </script>