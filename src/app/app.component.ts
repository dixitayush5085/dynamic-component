import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyamic-component';
  @ViewChild('notificationComponent', { read: ViewContainerRef })
  notificationComponent!: ViewContainerRef;
  ref!: ComponentRef<NotificationComponent>;

  showNotication() {
    this.ref = this.notificationComponent.createComponent(NotificationComponent);
    this.ref.instance.notificationText = "I am Notification";
  }

  hideNotication() {
    this.notificationComponent.clear();
  }

}
