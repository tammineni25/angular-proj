import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-success',
  template:`
  <div class="header">
    <a href="#default" class="logo">Hello Bank</a>
    <div class="header-right">
    <a [routerLink]="['/login']">Logout</a>
    </div>
</div>
  <div class="alert alert-success">
  <strong>You apply loan successfully</strong> 
</div>`
})
export class LoanSuccessComponent implements OnInit {
  
  constructor(
  
  ) { }

  ngOnInit(): void {
    

  }
}
