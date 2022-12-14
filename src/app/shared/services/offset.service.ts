import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffsetService {

  constructor() {}

  getOffset(context:any){
    const canvasRect = context.canvas.getBoundingClientRect();
    const offsetLeft = canvasRect.left;
    const offsetTop = canvasRect.top;
    return { top: offsetTop,left: offsetLeft }
  }
}
