import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class CustomValidator {

    matchValidator(controlName: string, matchControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchControl = formGroup.controls[matchControlName];            
            if (control.value === matchControl.value)
                matchControl.setErrors({ mustMatch: true });
            else
                matchControl.setErrors(null);
        }
    }
}