import { EventEmitter, Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceService } from '../components/service.service';

@Injectable({
  providedIn: 'root',
})
export class FrontService {
  event: EventEmitter<Number> = new EventEmitter();
  vm = {
    clientModel: {},
    categoryModel: [],
    courseChanged: false,
    itemModel: [],
    selectedCategoryId: 0,
    sidebarData: [],
    selectedMenuId: 0,
  };
  private contactsSubject = new Subject<number>();
  contactArrived$ = this.contactsSubject.asObservable();

  private _clientService: ServiceService;
  public get clientsService(): ServiceService {
    if (this._clientService) {
      return this._clientService;
    }
    return (this._clientService = this.injector.get(ServiceService));
  }
  contactsArrived(contacts: number) {
    if (contacts) {
       this.contactsSubject.next(contacts);
    }
 }
  constructor(private injector: Injector) {}
}