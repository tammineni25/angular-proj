import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
    let component: LoanComponent;
    let fixture: ComponentFixture<LoanComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoanComponent],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,

            ]
        })
            .compileComponents().then(() => {
                fixture = TestBed.createComponent(LoanComponent);
                component = fixture.componentInstance;
                de = fixture.debugElement.query(By.css('form'))
            });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('1-should create', () => {
        expect(component).toBeTruthy();
    });
    it('2-should set submitted to true', async(() => {
        component.onSubmit();
        expect(component.submitted).toBeTruthy;
    }));
    it('3-should call the onSubmit method', async(() => {
        fixture.detectChanges();
        spyOn(component, 'onSubmit');
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(component.onSubmit).toHaveBeenCalledTimes(0);

    }));
    it('4- form should be invaild', async(() => {
        component.loansForm.controls['loanType'].setValue('');
        component.loansForm.controls['loanAmount'].setValue('');
        component.loansForm.controls['courseFee'].setValue('');
        component.loansForm.controls['course'].setValue('');
        expect(component.loansForm.valid).toBeFalsy;

    }));
    it('5- form should be Valid', async(() => {
      component.loansForm.controls['loanType'].setValue('Home');
      component.loansForm.controls['loanAmount'].setValue('12345');
      component.loansForm.controls['courseFee'].setValue('12321');
      component.loansForm.controls['course'].setValue('MCA');
        expect(component.loansForm.valid).toBeTruthy;

    }));
});
