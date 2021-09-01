import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private baseUrl:string = 'http://localhost:3000/user'

  constructor(private httpClient: HttpClient) { }

  cadastroNovoUsuario(novoUsuario: NovoUsuario) {
    const url = `${this.baseUrl}/signup`
    return this.httpClient.post(url, novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    const url = `${this.baseUrl}/exists/${nomeUsuario}`
    console.log(url)
    return this.httpClient.get(url)
  }
}
