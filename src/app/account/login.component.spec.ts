import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,

            ]
        })
            .compileComponents().then(() => {
                fixture = TestBed.createComponent(LoginComponent);
                component = fixture.componentInstance;
                de = fixture.debugElement.query(By.css('form'))
            });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
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
        component.form.controls['userName'].setValue('');
        component.form.controls['password'].setValue('');
        expect(component.form.valid).toBeFalsy;

    }));
    it('4- form should be Valid', async(() => {
        component.form.controls['userName'].setValue('Tammineni123');
        component.form.controls['password'].setValue('Pass12!@');
        expect(component.form.valid).toBeTruthy;

    }));
});
