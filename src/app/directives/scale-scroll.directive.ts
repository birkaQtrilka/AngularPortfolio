import { Directive, Input, OnInit } from '@angular/core';
import { BaseScrollDirective } from './scroll-range.directive';

@Directive({
  selector: '[scrollScale]' 
})
export class ScrollScaleDirective extends BaseScrollDirective {
  @Input() override range: number = 300;  // Default range
  @Input() override offset: number = -400;   // Default offset

  override ngOnInit(): void {
    super.ngOnInit();
    this.range = window.innerHeight;
  }

  protected override applyTransformation(t: number): void {
    t = this.clamp(t, 0, 0.5);  
    
    this.renderer.setStyle(this.container, 'transform', `scale(${1 - t})`);
  }
}
