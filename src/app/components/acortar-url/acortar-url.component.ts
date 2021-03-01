import { Component, OnInit } from '@angular/core';
import { BitlyService } from 'src/app/services/bitly.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';

@Component({
  selector: 'app-acortar-url',
  templateUrl: './acortar-url.component.html',
  styleUrls: ['./acortar-url.component.css']
})
export class AcortarUrlComponent implements OnInit {
  urlOriginal : string;
  urlAcortada : string;

  constructor(private _bitlyService : BitlyService, private _errorService : ErrorService, private _spinnerService : SpinnerService ) { 
    this.urlOriginal = '';
    this.urlAcortada = '';
  }

  ngOnInit(): void {

  }

  acortarUrl(){
    this.urlAcortada = '';

    if (this.urlOriginal == ""){
      this._errorService.setTextoError('Debe definir un término de búsqueda');
      return;
    }
     this._spinnerService.setMostrarSpinner(true);
     this._bitlyService.acortarUrl(this.urlOriginal).subscribe(data => {
      this.urlAcortada = data.link;
      this._spinnerService.setMostrarSpinner(false);
     }, error => {
       this._errorService.setTextoError('Error al acortar la URL');
       this._spinnerService.setMostrarSpinner(false);
     })
  }

  copiarTexto(){
    navigator.clipboard.writeText(this.urlAcortada).then().catch(e => console.error(e));
  }

}
