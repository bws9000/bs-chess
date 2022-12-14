import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupComponent } from 'src/app/components/popups/popup.component';
import { ModalHostDirective } from '../../directives/modal-host.directive';
import { ModalServiceService } from '../../services/modal-service.service';

@Component({
  selector: 'app-host-container',
  template: `
    <ng-container modalHost></ng-container>
  `
})
export class HostContainerComponent implements AfterViewInit{

  @ViewChild(ModalHostDirective, {static: true}) modalHost!: ModalHostDirective;
  modalHostView: ViewContainerRef | undefined;

  constructor() {}

  ngAfterViewInit(): void {}

}
