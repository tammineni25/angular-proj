import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,

            ]
        })
            .compileComponents().then(() => {
                fixture = TestBed.createComponent(RegisterComponent);
                component = fixture.componentInstance;
                de = fixture.debugElement.query(By.css('form'))
            });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
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
        component.form.controls['email'].setValue('');
        component.form.controls['userName'].setValue('');
        component.form.controls['name'].setValue('');
        component.form.controls['password'].setValue('');
        expect(component.form.valid).toBeFalsy;

    }));
    it('5- form should be Valid', async(() => {
        component.form.controls['email'].setValue('as@as.com');
        component.form.controls['userName'].setValue('Tammineni123');
        component.form.controls['name'].setValue('Ramesh');
        component.form.controls['password'].setValue('Pass12!@');
        expect(component.form.valid).toBeTruthy;

    }));
});
