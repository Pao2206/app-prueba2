import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-nuevo-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-user.component.html',
  styleUrl: './nuevo-user.component.css'
})
export class NuevoUserComponent {

  id: any;
  email: any;
  tipo: any;

  servicio = inject(UsersService)

  guardar( datos: any){
    console.log(datos.value);
    this.servicio.postUser(datos.value).subscribe()

    //recarga la página
    window.location.href = "gestionUsers";
    }


}
