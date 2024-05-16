import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-nueva-orden',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-orden.component.html',
  styleUrl: './nueva-orden.component.css'
})
export class NuevaOrdenComponent {
  id: any;
  mesa: any;
  producto: any;
  total: any;

  servicio = inject(OrdenesService)

  guardar( datos: any){
    console.log(datos.value);
    this.servicio.postOrdenes(datos.value).subscribe()

    //recarga la página
    window.location.href = "ordenes";
    }

}
