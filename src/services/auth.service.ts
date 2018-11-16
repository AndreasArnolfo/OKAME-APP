import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Facebook } from '@ionic-native/facebook'

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth, public facebook: Facebook) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signInWithFacebook(): Promise<any> {
		return this.facebook.login(['email'])
		  .then( response => {
			const facebookCredential = firebase.auth.FacebookAuthProvider
			  .credential(response.authResponse.accessToken);
	  
			firebase.auth().signInWithCredential(facebookCredential)
			  .then( success => { 
				console.log("Firebase success: " + JSON.stringify(success)); 
			  });
	  
		  }).catch((error) => { console.log(error) });
	  }

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

	signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	private oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider);
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential.accessToken;
					// The signed-in user info.
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
}

}