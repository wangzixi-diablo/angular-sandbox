import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
  
    constructor(private el: ElementRef) { }
  
    // @Input() 装饰器会将元数据添加到此类，以便让该指令的 appHighlight 属性可用于绑定。
    @Input('appHighlight') appHighlightFromHost = '';
    
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.appHighlightFromHost);
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  
  }