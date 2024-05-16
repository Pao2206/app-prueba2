import { Component, inject } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

  servicio = inject(OrdenesService);
  orden: any ;
  filtro = 100;

  ngOnInit() {
    this.servicio.getOrdenes().subscribe(p =>{
      this.orden = p
    })
  }

}
