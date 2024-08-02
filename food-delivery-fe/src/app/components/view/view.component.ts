import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  user: User = {
    name: '',
    email: '',
    password: '',
    role: '',
    address: '',
    phone: ''
  };
  userData: any;

  constructor(private registrationService: RegistrationService, private route: ActivatedRoute,
    private router: Router) { };


    getUserByEmail(): void{
      const userData = {
        email: this.user.email
      };

    this.registrationService.getUserByEmail(`${this.user.email}`)
    .subscribe({
      next: (data) => {
        this.user = data;
        console.log(`Data recieved from backend service is: " + ${data}`);
      },
      error: (e) => console.error(e)
    });
  }



}
