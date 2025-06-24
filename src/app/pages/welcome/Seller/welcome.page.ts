import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicSlides } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ IonicModule, CommonModule, FormsModule]
})
export class WelcomePage implements OnInit {
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }
  onSlideChange() {
    console.log('Slide changed');
  }

}
