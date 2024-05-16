import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.css'
})
export class GestionUsersComponent {

  servicio = inject(UsersService)
  user: any 

  ngOnInit() {
    this.servicio.getUsers().subscribe(p =>{
      this.user = p
    })
  }

  eliminar(id: any){
    this.servicio.deleteUser(id).subscribe()

    //recarga la página
    window.location.href = "gestionUsers";
    }
  }


