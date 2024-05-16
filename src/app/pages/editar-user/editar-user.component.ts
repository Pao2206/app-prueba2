import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-editar-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-user.component.html',
  styleUrl: './editar-user.component.css'
})
export class EditarUserComponent {

  id: any;
  email: any;
  password: any;
  tipo: any;

  servicio = inject(UsersService)

  editar( datos: any){
    console.log(datos.value);
    this.servicio.putUser(datos.value).subscribe()

    //recarga la página
    window.location.href = "gestionUsers";
    }

}
