import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { BaseScrollDirective } from './scroll-range.directive';

@Directive({
  selector: '[appGlossyScroll]'
})
export class GlossyScrollDirective extends BaseScrollDirective {

  @Input() override range: number = 300;
  @Input() override offset: number = 0;

  @HostBinding('class.glossy-container') glossyContainerClass = true;

  private shineEl!: HTMLElement;

  override ngOnInit(): void {
    super.ngOnInit();

    this.range = window.innerHeight ;
    this.ensureShineElement();
  }

  private ensureShineElement(): void {
    const existing = this.container.querySelector<HTMLElement>('.glossy-shine');
    if (existing) {
      this.shineEl = existing;
      return;
    }

    this.shineEl = this.renderer.createElement('div');
    this.renderer.addClass(this.shineEl, 'glossy-shine');

    this.renderer.appendChild(this.container, this.shineEl);
  }

  protected override applyTransformation(t: number): void {
    t *= 100;
    if (!this.shineEl) return;

    this.renderer.setStyle(
      this.shineEl,
      'transform',
      `translate(${t}%, ${t}%)`
    );
  }
}
