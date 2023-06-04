import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  username: string = '';
password: string = '';


  constructor( private router: Router, private snackBar: MatSnackBar) {
    
  }

  login() {
    // Get the username and password input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    // Check if username and password are not empty
    if (username && password) {
      // Perform any necessary login logic here
  
      // Redirect to the dashboard component
      this.router.navigate(['/dashboard']);
    } else {
      // Show an error message if username or password is empty
      this.snackBar.open('Please enter username and password', 'Close', {
        duration: 3000,
      });
    }
  }
  

}
