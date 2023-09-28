import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[roundList]',
})
export class RoundListDirective {
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.setRoundBorders();
  }

  setRoundBorders() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-radius',
      '10px'
    );
  }
}
