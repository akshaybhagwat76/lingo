import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TermConditionComponent } from './components/term-condition/term-condition.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ServiceService } from '../app/components/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FaqComponent } from './components/faq/faq.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCroppingComponent } from './components/image-cropping/image-cropping.component';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { CancelPaymentComponent } from './components/cancel-payment/cancel-payment.component';
import { NgxCSVtoJSONModule } from 'ngx-csvto-json';
import { DatePipe } from '@angular/common';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { FrontService } from './services/front.service';

@NgModule({
 
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TermConditionComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    FaqComponent,
    // ImageCropperComponent,
    ImageCroppingComponent,
    ThankYouComponent,
    CancelPaymentComponent,
   
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    NgxCSVtoJSONModule,
    NgxCsvParserModule,
  ],
  providers: [
    ServiceService,
    DatePipe,
    FrontService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '1055684469608-s4ud2r83ruqvhj1q393n160as904j64m.apps.googleusercontent.com'
              '621159063786-tibd36211e90a2pu2mt5len5hibd6ifa.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1413242099126993'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
