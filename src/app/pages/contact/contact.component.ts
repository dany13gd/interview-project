import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  public showErrorMessage = false;
  public mhTitle: string = 'Contact';
  public bgImage: string = '../../../assets/images/masthead-contact.webp';
  public image: string = '../../../assets/images/contact-image.jpg';
  public width: string = '790';
  public height: string = '790';
  public contactInformation: any = {};

  public contactForm = new FormGroup({});

  createForm() {
    this.contactForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
      },
      {
        validators: this.emailConfirmationValidator.bind(this),
      }
    );
  }

  emailConfirmationValidator(form: FormGroup): ValidationErrors | null {
    const email = form.get('email')?.value;
    const confirmEmail = form.get('confirmEmail')?.value;

    return email === confirmEmail
      ? null
      : this.snackBar.open('different emails, plese check', 'close');
  }

  public submitForm(): void {
    if (this.contactForm.invalid) {
      this.showErrorMessage = false;
      return;
    } else {
      this.contactInformation = this.contactForm.value;
      console.log(this.contactInformation);

      this.snackBar.open('Email Sent successfully', 'close');
    }
  }
}
