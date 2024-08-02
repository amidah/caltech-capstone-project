import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    name: '',
    email: '',
    password: '',
    role: '',
    address: '',
    phone: ''
  };

  submitted = false;

  constructor(private registrationService: RegistrationService) { };

  registerUser(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role,
      address: this.user.address,
      phone: this.user.phone
    }

    this.registrationService.registerUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.log(e)
    });

  }



}
