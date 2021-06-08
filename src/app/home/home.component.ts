import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  name: any;    
    constructor(public router: Router, public route: ActivatedRoute){
     this.name =this.route.snapshot.paramMap.get('name');
      console.log(this.name);
    }
    
}