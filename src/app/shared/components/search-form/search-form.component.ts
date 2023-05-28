import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '../../models/location';
import { DateTimeService } from 'src/app/core/data-services/date-time.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  constructor(
    private dateTimeService: DateTimeService,
    private snackBar: MatSnackBar,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.timeList = this.dateTimeService.getTimesList();
    this.preloadForm();
  }
  public pickLocationName: string = '';
  public searchForm = new FormGroup({
    pickUpLocation: new FormControl(0, [Validators.required]),
    pickUpDate: new FormControl('', [Validators.required]),
    pickUpTime: new FormControl('', [Validators.required]),
    dropLocation: new FormControl(0, [Validators.required]),
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
    pickUpLocation: 0,
    pickUpDate: '',
    pickUpTime: '',
    dropLocation: 0,
    dropDate: '',
    dropTime: '',
  };
  @Output() searchResultsSaved: EventEmitter<Car[]> = new EventEmitter<Car[]>();

  public locations: Location[] = [
    { Id: '0', Name: 'Airport de Cancun' },
    { Id: '1', Name: 'Airport de Colima' },
    { Id: '2', Name: 'Airport de Guadalajara' },
    { Id: '3', Name: 'Airport de la Ciudad de Mexico' },
    { Id: '4', Name: 'Airport de Leon Guanajuato' },
    { Id: '5', Name: 'Airport de Los Cabos' },
    { Id: '6', Name: 'Airport de Manzanillo' },
    { Id: '7', Name: 'Airport de Merida' },
    { Id: '8', Name: 'Airport de Monterrey' },
    { Id: '9', Name: 'Airport de Puerto Vallarta' },
    { Id: '10', Name: 'Airport de Queretaro' },
  ];
  public submitForm(): void {
    if (this.searchForm.invalid) {
      this.showErrorMessage = false;
      return;
    } else {
      this.snackBar.open('Successful request', 'close');
      const searchParams = Object.assign(this.searchForm.value);
      this.utilsService.storageSet('searchParams', searchParams);
      this.activeSpinner = true;
      setTimeout(() => {
        this.activeSpinner = false;
        this.searchResultsSaved.emit(searchParams);
        this.router.navigate(['/reserve']);
      }, 3000);
    }
  }

  public preloadForm(): void {
    this.searchForm.setValue({
      pickUpLocation: this.dataSearch.pickUpLocation,
      pickUpDate: this.dataSearch.pickUpDate,
      pickUpTime: this.dataSearch.pickUpTime,
      dropLocation: this.dataSearch.dropLocation,
      dropDate: this.dataSearch.dropDate,
      dropTime: this.dataSearch.dropTime,
    });
  }
}
