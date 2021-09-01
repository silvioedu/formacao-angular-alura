import { UsuarioService } from './usuario/usuario.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private url:string = 'http://localhost:3000/user/login'

  constructor(private httpClient: HttpClient,
    private usuarioService: UsuarioService) { }

  autenticar(usuario:string, senha:string): Observable<HttpResponse<any>> {
    return this.httpClient.post(this.url, {
        userName: usuario,
        password: senha
      },
      {
        observe: 'response'
      }
    ).pipe(
      tap( response => {
        const authToken = response.headers.get('x-access-token') ?? ''
        this.usuarioService.salvaToken(authToken)
      })
    )
  }
}
