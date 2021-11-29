import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  url = 'http://localhost:8080/produtos';

  // injetando o HttpCliente
  constructor(private httpClient: HttpClient) { }

  //headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
  }

  // Obtem um carro pelo id

  getProdutoById(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.url + '/' + id);
  }

  // Obtem um carro pela tag
  getProdutoByTag(tag: string): Observable<Produto> {
    return this.httpClient.get<Produto>(this.url + '/' + tag)
  }

  // salva um carro
  saveProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
  }

  // utualiza um carro
  updateProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.url + '/' + produto.id, JSON.stringify(produto), this.httpOptions)
  }

  // deleta um carro
  deleteProduto(produto: Produto) {
    return this.httpClient.delete<Produto>(this.url + '/' + produto.id, this.httpOptions)
  }


  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);}


}


