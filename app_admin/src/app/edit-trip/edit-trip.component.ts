import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  @Input('trip') trip: any;  // for delete button

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!")
      this.router.navigate([''])
      return;
    }

    console.log("EditTripComponent#onInit found tripCode " + tripCode)

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data)
        if (!data) {  // when deleting it re-runs init function somehow. If no data (delete response returns null) then return
          return
        }
        // don't use editForm.setValue() as it throws console error
        this.editForm.patchValue(data[0])
      })
  }

  private deleteTrip() {
    if (confirm("Are Sure You Want To Delete This Trip?") == true) {
      // delete trip
      const tripCode = localStorage.getItem("tripCode")
      console.log(tripCode);
      this.tripService.deleteTrip(tripCode)
        .then(data => {
          console.log(data);
          this.router.navigate([''])
        })
    } else {
      // do nothing
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        })
    }
  }
  

}
