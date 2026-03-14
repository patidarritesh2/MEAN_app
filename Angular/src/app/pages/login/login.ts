import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth";
import { Router, RouterModule } from "@angular/router";
import { Component, inject } from "@angular/core";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  user = { username: '', password: '' };

  login() {
    this.auth.login(this.user).subscribe((res: any) => {
      this.auth.saveToken(res.token);
      this.router.navigate(['/dashboard']);
    });
  }
}