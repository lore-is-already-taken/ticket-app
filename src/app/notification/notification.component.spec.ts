import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationService } from '../core/services/notification.service';
import { of } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NotificationComponent],
      providers: [NotificationService]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch notifications on init', () => {
    const notifications = [
      { id: 1, content: 'New ticket created' },
      { id: 2, content: 'Ticket assigned to you' }
    ];
    spyOn(notificationService, 'getNotifications').and.returnValue(of(notifications));
    component.ngOnInit();
    expect(component.notifications.length).toBe(2);
    expect(component.notifications).toEqual(notifications.map(notification => ({ ...notification, read: false })));
  });

  it('should mark notifications as read', () => {
    spyOn(notificationService, 'markAsRead').and.returnValue(of(null));
    component.notifications = [
      { id: 1, content: 'New ticket created', read: false }
    ];
    component.markAsRead(1);
    expect(notificationService.markAsRead).toHaveBeenCalledWith(1);
    expect(component.notifications[0].read).toBeTrue();
  });

  it('should toggle the notification dropdown', () => {
    component.dropdownVisible = false;
    component.toggleDropdown();
    expect(component.dropdownVisible).toBeTrue();
    component.toggleDropdown();
    expect(component.dropdownVisible).toBeFalse();
  });
});

