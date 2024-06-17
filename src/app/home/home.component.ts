import { Component, OnInit } from "@angular/core";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";
import { TicketComponent } from "../ticket/ticket.component";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, CreateTicketComponent, TicketComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  tickets: any[] = [];

  constructor(private ticketServices: TicketServicesService) {}

  ngOnInit(): void {
    this.ticketServices.getAllTickets().subscribe({
      next: (data) => this.tickets = data,
      error: (err) => console.error('Error fetching tickets', err)
    });
  }
}
