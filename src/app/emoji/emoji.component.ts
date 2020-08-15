import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit , AfterViewInit{

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.body')
                                  .addEventListener('mousemove', this.eyesMove.bind(this));
  }

  eyesMove(e){
      let eye = document.querySelectorAll(".eye");
      eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        (eye as HTMLElement).style.transform = "rotate(" + rot + "deg)";
      })
  }

}
