import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from '../services/account.service';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    accountType: any = ['Saving', 'Current', 'Credit'];
    maritalStatus: any = ['Married', 'UnMarried', 'Single'];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            guardianName: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['male', [Validators.required]],
            maritalStatus: ['', Validators.required],
            contactno: ['', [Validators.required, Validators.maxLength(10)]],
            dob: ['', Validators.required],
            acctType: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.registration(this.form.value)
            .subscribe({
                next: () => {
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.loading = false;
                }
            });
    }
}