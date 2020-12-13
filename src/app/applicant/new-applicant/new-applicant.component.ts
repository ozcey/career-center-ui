import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/utility/snackbar.service';
import { VolunteerService } from 'src/app/volunteer/volunteer.service';

@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.component.html',
  styleUrls: ['./new-applicant.component.css']
})
export class NewApplicantComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  isLinear = false;
  nameFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  professionalFormGroup: FormGroup;

  constructor(
    private volunteerService: VolunteerService,
    private snackbar: SnackbarService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.nameFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.addressFormGroup = this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
    this.professionalFormGroup = this.formBuilder.group({
      category: ['', [Validators.required]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      degree: ['', Validators.required],
      languages: ['', Validators.required],
    });
  }

  onSubmit() {
    const category = [];
    const languages = [];

    category.push(this.professionalFormGroup.value.otherIndustries);
    languages.push(this.professionalFormGroup.value.languages);

    const volunteer = {
      firstName: this.nameFormGroup.value.firstName,
      lastName: this.nameFormGroup.value.lastName,
      phone: this.nameFormGroup.value.phone,
      email: this.nameFormGroup.value.email,
      category: category,
      age: this.professionalFormGroup.value.age,
      gender: this.professionalFormGroup.value.gender,
      degree: this.professionalFormGroup.value.degree,
      languages: languages,
      address: {
        street: this.addressFormGroup.value.street,
        city: this.addressFormGroup.value.city,
        state: this.addressFormGroup.value.state,
        zipcode: this.addressFormGroup.value.zipcode
      }
    };

    // const volunteerRequest = {
    //   volunteer,
    //   companies
    // }

    // console.log(volunteerRequest);

    // this.subscription = this.volunteerService.createVolunteer(volunteerRequest).subscribe(data => {
    //   console.log(data);
    //   this.snackbar.showSnackbar('Volunteer created successfully!', null, 5000, 'bottom');
    // }, error => {
    //   console.log(error.message);
    //   this.snackbar.errorMessage();
    // });
    
    this.nameFormGroup.reset();
    this.professionalFormGroup.reset();
    this.addressFormGroup.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
