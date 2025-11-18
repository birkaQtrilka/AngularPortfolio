import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appBaseScroll]' // Base directive
})
export class BaseScrollDirective implements OnInit, OnDestroy {
  @Input() range: number = 300;  // Default range
  @Input() offset: number = 0;   // Default offset
  
  protected container: HTMLElement;
  private scrollListener: () => void = () => {};

  constructor(private el: ElementRef, protected renderer: Renderer2) {
    this.container = el.nativeElement;
  }

  ngOnInit(): void {
    this.scrollListener = this.setupScrollListener();
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
  }

  private setupScrollListener() {
    return () => {
      const rect = this.container.getBoundingClientRect();
      let t = (rect.y + this.offset) / this.range;
      t = this.clamp(t, -1, 1);
      this.applyTransformation(t);
    };
  }

  protected applyTransformation(t: number): void {
    // To be implemented in inheriting directives
  }

  public clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
  }
}
