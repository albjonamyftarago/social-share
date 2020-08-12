import { Component, OnInit,OnDestroy, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({ selector: 'app-bubbles', templateUrl: './bubbles.component.html', styleUrls: ['./bubbles.component.scss'] })
export class BubblesComponent implements OnInit,OnDestroy {

  @ViewChild('bubbleParent') bubble: ElementRef;
  constructor(private renderer:Renderer2) { }
  private intervalSubscription: Subscription;

  ngOnInit() {
    this.intervalSubscription = interval(50) // 5 min make a call to fetch new data.
      .subscribe((val) => {
        this.createBubble();
      });
  }

  createBubble() {
    // const section = document.querySelector('section')
    const createElement = this.renderer.createElement('span')
    var size = Math.random() * 60;
    console.log("aaa")
    createElement.classList.add('bubble')
    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    
    this.renderer.addClass(createElement,'bubble')
    this.renderer.appendChild(this.bubble.nativeElement,createElement)

    setTimeout(() => {
      createElement.remove()
    }, 4000)
  }
  ngOnDestroy() {
    if (this.intervalSubscription !== undefined) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
