import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css'
})
export class CreateTicketComponent {
    ticket = this.formBuilder.group({
        categoria : [""],
        contenido : [""]
    })

	constructor(private formBuilder: FormBuilder) {}

    onSubmit(){
        if(true){
            alert('Ticket: ');
        };
    }
}
