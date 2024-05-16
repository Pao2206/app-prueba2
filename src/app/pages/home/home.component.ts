import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  servicio = inject(LoginService)

  email: any;
  password: any;
  token: any;
  tipo: any;

  ruta = inject(Router)


  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      this.tipo = p.user.tipo

      if(this.token!=''){
        localStorage.setItem('token', 'true')
      }
      if(this.tipo=='admin'){
        localStorage.setItem("tipo", '1')
      }else{
        localStorage.setItem("tipo", '2')
      }
      window.location.reload()

      if(localStorage.getItem('tipo')=='1'){
        window.location.href = "gestionUsers"
      }

      if(localStorage.getItem('tipo')=='2'){
        window.location.href = "ordenes"
      }
    })
  }
  
}
