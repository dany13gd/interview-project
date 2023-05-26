import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailValidator } from 'src/app/core/validators/email-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

  public mhTitle: string = 'Contact';
  public bgImage: string = '../../../assets/images/mhContact-image.jpg';
  public image: string = '../../../assets/images/contact-image.jpg';
  public width: string = '790';
  public height: string = '790';

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      // EmailValidator('email'),
    ]),
    message: new FormControl('', [Validators.required]),
  });
  public showErrorMessage = false;
  public submitForm(): void {
    if (this.contactForm.invalid) {
      this.showErrorMessage = false;
      return;
    } else {
      this.snackBar.open('Email Sent successfully', 'close');
    }
  }
}
