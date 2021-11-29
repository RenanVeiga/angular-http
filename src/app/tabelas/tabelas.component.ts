import { Produto } from './../models/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../servicos/produto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  produtos = {} as Produto
  produto: any //Produto[]
  buscar!: string

    constructor(private servicoProduto: ProdutoService, ){
      //this.produto = [];
    }

    ngOnInit(){
      this.getProduto();
    }

    // define se um carro será criado ou atualizado
    saveProdutoOrAlter(form: any) {
    if (this.produtos.id !== undefined) {
      this.servicoProduto.updateProduto(this.produtos).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.servicoProduto.saveProduto(this.produtos).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

      // Chama o serviço para obtém todos os carros
    getProduto() {
    this.servicoProduto.getProdutos().subscribe((produtos: Produto[]) => {
      this.produto = produtos;
    });}

    pesquisaProduto(proc: any){
      if(typeof proc === 'number'){
        this.servicoProduto.getProdutoById(proc);
      }else{
        this.servicoProduto.getProdutoByTag(proc);
      }
    }

    getProdutoById(id: number) {
      this.servicoProduto.getProdutoById(id).subscribe((produtos: Produto)=>{

      });
    }
    getProdutoByTag(tag: string) {
        this.servicoProduto.getProdutoByTag(tag);
      }

      public findProductByTag(){
        let resp= this.servicoProduto.getProdutoByTag(this.buscar);
        resp.subscribe((data)=> this.produto= data);
       }

     // deleta um produto no servidor
  deleteProduto(produto: Produto) {
    this.servicoProduto.deleteProduto(produto).subscribe(() => {
      this.getProduto();
    });
  }

  // copia uma tabela de produto para ser editada.
  editProduto(produto: Produto) {
    this.produtos = { ...produto };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProduto();
    form.resetForm();
    this.produtos = {} as Produto;
  }

}
