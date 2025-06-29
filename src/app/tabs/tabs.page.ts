import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    standalone: true,
    // imports: [IonicModule]
})
export class TabsPage {
    public environmentInjector = inject(EnvironmentInjector);

    constructor() {
    }
}
