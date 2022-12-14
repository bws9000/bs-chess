import { Component, Inject, ViewContainerRef } from '@angular/core';
//import { PopupComponent } from './components/popups/popup.component';
import { ModalServiceService } from './shared/modules/modal/services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgChess';
  constructor(
    @Inject(ViewContainerRef) viewContainerRef:any,
    private modalService: ModalServiceService){
      this.modalService.setModalHost(viewContainerRef);
      //this.testModal();
  }
  // testModal():void{
  //   this.modalService.open({
  //     popupComponent: PopupComponent,
  //     data: { 'title':'Modal Title', 'message': 'Modal Message body.' }
  //   });
  // }
}
