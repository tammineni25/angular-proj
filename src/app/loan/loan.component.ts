import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loansForm: FormGroup;
  loading = false;
  submitted = false;
  loanTypeArr = ['Education', 'Home'];
  successMsg= '';
  errorMsg='';
  isEducation: boolean;
  isHome: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.loansForm = this.formBuilder.group({
      loanType: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanApplyDate: ['', Validators.required],
      rateOfInterest: ['', Validators.required],
      dourationOfLoan: ['', Validators.required],
      courseFee: ['', Validators.required],
      course: ['', Validators.required],
      fatherName: ['', Validators.required],
      anualIncome: ['', Validators.required],
      companyName: ['', Validators.required]
    });

  }
  get f() { return this.loansForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loansForm.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.applyLoan(this.loansForm.value)
          .subscribe({
              next: () => {
                  this.router.navigate(['/loan-success']);
                  
              },
              error: error => {
                  this.loading = false;
                  this.errorMsg= "Request could not process.";
              }
          });
  }
  onChange(event:any) {
    console.log(event.target.value);
    if(event.target.value === '1: Education') {
      this.isEducation = true;
    }
    if(event.target.value === '2: Home') {
      this.isHome = true;
    }

  }
}
