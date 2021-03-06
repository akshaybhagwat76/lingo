import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { FrontService } from 'src/app/services/front.service';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  user: string;
  wallet: string;
  image: string;
  updateNewDataImage: '';
  subscription: Subscription;
  private _frontService: FrontService;
  public get frontServices(): FrontService {
    if (this._frontService) {
      return this._frontService;
    }
    return (this._frontService = this.injector.get(FrontService));
  }
  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private injector: Injector,
    private service: ServiceService,
    private eventEmitterService: EventEmitterService
  ) {
    if (this.subscription == undefined) {
      this.subscription =
        this.eventEmitterService.invokeProfileChange.subscribe(() => {
          this.profile();
        });
    }
  }

  ngOnInit(): void {
   
    this.username();
    this.walletData();
    this.profile();
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.frontServices.vm.sidebarData = null;

    this.router.navigate(['/login']);
    this.signOut();
  }
  signOut(): void {
    sessionStorage.clear();

    localStorage.clear();
    this.authService.signOut();
  }
  // username
  username() {
    this.user = sessionStorage.getItem('username');
  }
  walletData() {
    this.wallet = sessionStorage.getItem('wallet');
  }
  isStudent() {
    if ('student' in sessionStorage) {
      return true;
    } else {
      return false;
    }
  }
  profile() {
    const data = {
      user_id: sessionStorage.getItem('uid'),
      avatar: localStorage.getItem('image'),
    };
    this.service.post('get_profile_by_id', data, 1).subscribe((res) => {
      this.updateNewDataImage = res.body.profile.avatar;
      if (this.updateNewDataImage == null) {
        this.updateNewDataImage = '';
      }
    });
  }
}
