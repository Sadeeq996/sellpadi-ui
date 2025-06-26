import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/Seller/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'signin',
    loadComponent: () => import('./auth/signin/signin.page').then( m => m.SigninPage)
  },
];
