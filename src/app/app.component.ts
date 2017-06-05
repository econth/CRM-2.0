import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any, icon: string}>;

  showSubmenu: boolean = false;

menuItemHandler(): void {
  this.showSubmenu = !this.showSubmenu;
}

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard',        component: HelloIonicPage ,icon:'fa-dashboard'},
      { title: 'My First List',    component: ListPage,       icon:'fa-dashboard' },
      { title: 'Book Appointment', component: ListPage,       icon:'fa-sticky-note-o' },
      { title: 'Appointments',     component: ListPage,       icon:'fa-sticky-note-o' },
      { title: 'Customer',         component: HelloIonicPage, icon:'fa-gift' },
      { title: 'Employees',        component: ListPage,       icon:'fa-globe' },
      { title: 'Accounts',         component: HelloIonicPage, icon:'fa-user' },
      { title: 'Invoices',         component: ListPage,       icon:'fa-history' },
      { title: 'Reports',          component: HelloIonicPage, icon:'fa-file-text' },
      { title: 'Signout',          component: ListPage,       icon:'fa-sign-out' }
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
