import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@animals/core-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  verifiedUser = { username: 'username', password: 'password' };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm();
    localStorage.setItem('verified', '');
  }

  login() {
    const { username, password } = this.form.value;
    const verifiedUser = this.verifiedUser.username === username && 
      this.verifiedUser.password === password;

    if (this.form.valid && verifiedUser) { 
      this.router.navigateByUrl('/animals');
      this.authService.setToken(username);
    }
  }

  validateField(control: string, directive: NgForm) {
    return this.form.get(control).invalid && directive.submitted;
  }

  private loginForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}