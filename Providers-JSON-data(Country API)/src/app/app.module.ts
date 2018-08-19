import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DataProvider} from "../providers/providers-data/providers-data";
import {AlbumDetailsPage} from "../pages/album-details/album-details";
import { RealDataProvider } from '../providers/real-data/real-data';
import {HttpClientModule} from "@angular/common/http";
import { GradientsDataProvider } from '../providers/gradients-data/gradients-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AlbumDetailsPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AlbumDetailsPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RealDataProvider,
    GradientsDataProvider
  ]
})
export class AppModule {
}
