import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
import { TicketComponent } from '../ticket/ticket.component';
import { TicketServicesService } from '../core/services/ticket-services.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        HttpClientTestingModule,  // Importa el módulo de pruebas para HttpClient
        CreateTicketComponent,
        TicketComponent
      ],
      providers: [TicketServicesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
