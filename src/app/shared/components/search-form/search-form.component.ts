import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '../../models/location';
import { DateTimeService } from 'src/app/core/data-services/date-time.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  constructor(
    private dateTimeService: DateTimeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.timeList = this.dateTimeService.getTimesList();
  }
  public searchForm = new FormGroup({
    pickUpLocation: new FormControl('', [Validators.required]),
    pickUpDate: new FormControl('', [Validators.required]),
    pickUpTime: new FormControl('', [Validators.required]),
    dropLocation: new FormControl('', [Validators.required]),
    dropDate: new FormControl('', [Validators.required]),
    dropTime: new FormControl('', [Validators.required]),
  });

  public contactInformation: any = {};
  public showErrorMessage = false;
  public timeList: string[] = [];
  public enableForm = false;
  public activeSpinner: boolean = false;
  public minDate: Date = new Date();
  @Input() topSpacing = true;
  @Input() defaultValues = false;
  @Input() dataSearch = {
    pickUpLocation: '',
    pickUpDate: '',
    pickUpTime: '',
    dropLocation: '',
    dropDate: '',
    dropTime: '',
  };
  @Output() searchResultsSaved: EventEmitter<void> = new EventEmitter<void>();

  public locations: Location[] = [
    { Id: 1, Name: 'Airport de Cancun' },
    { Id: 1, Name: 'Airport de Colima' },
    { Id: 1, Name: 'Airport de Guadalajara' },
    { Id: 1, Name: 'Airport de la Ciudad de Mexico' },
    { Id: 1, Name: 'Airport de Leon Guanajuato' },
    { Id: 1, Name: 'Airport de Los Cabos' },
    { Id: 1, Name: 'Airport de Manzanillo' },
    { Id: 1, Name: 'Airport de Merida' },
    { Id: 1, Name: 'Airport de Monterrey' },
    { Id: 1, Name: 'Airport de Puerto Vallarta' },
    { Id: 1, Name: 'Airport de Queretaro' },
  ];

  public submitForm(): void {
    if (this.searchForm.invalid) {
      this.showErrorMessage = false;
      return;
    } else {
      this.contactInformation = this.searchForm.value;
      console.log(this.contactInformation);
      this.snackBar.open('Successful request', 'close');
    }
  }
}
