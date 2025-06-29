import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthShellComponent } from '../auth-shell/auth-shell.component';

import { ToastController } from '@ionic/angular';
// import { AuthService } from '../../shared/services/authentications/auth.service';
// import { Toast } from '@capacitor/toast';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [AuthShellComponent, RouterModule, IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  showPassword = false;
  password: string = '';


  private emailPattern =
    '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
  signinMessage: string = '';

  hide: boolean = true;
  loginForm: FormGroup;
  success: boolean = false;
  title: string = '';
  message: string = '';

  constructor(private fb: FormBuilder, private router: Router,
    private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
  }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Call API
    }
  }

  signin() {
    if (this.loginForm.invalid) {
      this.presentToast('Invalid Input', 'There is an error in your details.', 'toast-warning');
      return;
    }

    // this.authService.login(this.loginForm.value).subscribe(
    //   (response) => {
    //     try {
    //       if (response && typeof response === 'object') {
    //         this.handleResponse(response);
    //         if (response.status) {
    //           this.showInterestPage();
    //         }
    //       }
    //     } catch (e) {
    //       this.presentToast('Error', 'Something went wrong while processing response.', 'toast-error');
    //     }
    //   },
    //   (error) => {
    //     this.presentToast('Login Failed', 'An unexpected error occurred. Please try again later.', 'toast-error');
    //   }
    // );

    this.loginForm.reset();
  }

  googleLogin() {
    // Trigger Google Auth
  }

  navigateTo(path: 'login' | 'signup') {
    this.router.navigate([`/auth/${path}`]);
  }
  get loginFormControls() {
    return this.loginForm.controls;
  }

  async presentToast(header: string, message: string, cssClass: string, duration?: number) {
    const toast = await this.toastCtrl.create({
      buttons: [
        {
          text: 'close',
        }
      ],
      cssClass: cssClass,
      header: header,
      keyboardClose: true,
      message: message,
      position: 'top',
      duration: duration || 2000,
    });
    await toast.present();
  }

  private handleResponse(response: any) {
    const message = response?.message;
    const status = response?.status ?? false;
    if (status) {
      this.presentToast('Successfully Signed in', message, 'toast-success', 2000);
    } else {
      this.presentToast('Failed', message, 'toast-error');
    }
  }

  onGoogleLogin() {
    this.presentToast('Info', 'Google login is not yet implemented.', 'toast-warning');
  }

}
