import { Component, OnInit } from '@angular/core';
import { RequestSearch } from 'src/app/models/requestSearch.model';
import { JourneyService } from '../services/journey.service';
import { Journey } from 'src/app/models/journey.model';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/services/custom-Validator';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogElementComponent } from '../dialog-element/dialog-element.component';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  journey: Journey;
  result: boolean;
  form!: FormGroup;
  currency: string;
  currencies: Currency[];
  constructor(
    private service: JourneyService,
    private formBuilder: FormBuilder,
    private customValidator: CustomValidator,
    private dialog: MatDialog
  ) {
    this.currencies = [];
    this.journey = {
      Origin: '',
      Destination: '',
      Price: 0,
      Flights: [],
      TypeTrip: 0
    }
    this.result = false;

    this.currency = "USD"
    this.form = this.formBuilder.group({
      origin: ['', [Validators.required, Validators.minLength(3)]],
      destination: ['', [Validators.required, Validators.minLength(3)]],
    }, {
      validator: this.customValidator.matchValidator('origin', 'destination')
    });
  }
  ngOnInit(): void {
    this.getCurrencies();
    this.service.getJourney().subscribe(jo => {
      if (jo == null || jo == undefined) {

      }
      else {
        if (jo.Flights.length > 0) {
          this.result = true;
          this.journey = jo;
        }
        else {
          this.result = false;
          this.dialog.open(DialogElementComponent);
        }
      }
    });

  }
  search() {
    this.service.GetJourney(this.form.controls['origin'].value.toString(), this.form.controls['destination'].value.toString());
  }
  changeCurrency(event: Currency){
    this.currency = event.Code;
    this.journey =  {...this.journey} ;
    let total: number = 0;
    this.journey.Flights.forEach(x => total += x.Price);
    this.journey.Price = total * event.Convertion;
  }
  getCurrencies() {
    this.currencies = [
      {
        Id: 1,
        Code: 'USD',
        Convertion: 1,
        Active: true
      },
      {
        Id: 2,
        Code: 'CAD',
        Convertion: 1.36,
        Active: true
      }, {
        Id: 3,
        Code: 'EUR',
        Convertion: 0.93,
        Active: true
      }
    ]
  }
}
