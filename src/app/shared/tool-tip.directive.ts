import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import tippy, {Tippy} from 'tippy.js';
@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective  implements AfterViewInit{
  @Input('appToolTip') toolInputContent !:string;
  constructor(private element:ElementRef) { }
  ngAfterViewInit(){
    tippy(this.element.nativeElement,{
      content:this.toolInputContent
    })

  }

}
