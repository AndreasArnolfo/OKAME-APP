import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from "../pages/register/register";

import {
	LoginPage
} from '../pages/login/login'
import { AuthService } from '../services/auth.service';
import { AvisPage } from '../pages/avis/avis';
import { RepasPage } from '../pages/repas/repas';
import { MessagerPage } from '../pages/messenger/messager';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilPlusPage } from '../pages/profilPlus/profilPlus';
import { MessageriPage } from '../pages/messageri/messageri';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = LoginPage;

	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService, private menu: MenuController) {
		this.initializeApp();

		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'List', component: ListPage },
			{ title: 'Register', component: RegisterPage },
			{ title: 'Avis', component: AvisPage },
			{ title: 'Repas', component: RepasPage },
			{ title: 'messager', component: MessagerPage },
			{ title: 'profil', component: ProfilPage },
			{ title: 'profilplus', component: ProfilPlusPage },
			{ title: 'messageri', component: MessageriPage },

		];

	}
	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
		this.auth.afAuth.authState
			.subscribe(
				user => {
					if (user) {
						this.rootPage = HomePage;
					} else {
						this.rootPage = LoginPage;
					}
				},
				() => {
					this.rootPage = LoginPage;
				}
			);
	}

	login() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	logout() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}
}
