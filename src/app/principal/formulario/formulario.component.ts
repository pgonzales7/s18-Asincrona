import { Component } from '@angular/core';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  email: string = ""
  password: string = ""
  data = ""
  resultado = false

  constructor(private service: FormularioService) { }

  enviarDatos() {
    this.service.postUser({ email: this.email, password: this.password }).subscribe(
      (res) => {
        this.resultado = true
        this.data = res
      }
    )
  }
}
