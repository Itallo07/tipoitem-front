import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tipoitem } from '../tipoitem.model';
import { tipoitenservice } from '../tipoitem.service';

@Component({
  selector: 'app-tipoitem-delete',
  templateUrl: './tipoitem-delete.component.html',
  styleUrls: ['./tipoitem-delete.component.css']
})
export class tipoitemDeleteComponent implements OnInit {
  tipoitem : tipoitem = {
    id : '',
    tipoItem : '',
    descricao : '' 
  }

  constructor(private service : tipoitenservice, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void { 
    this.tipoitem.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.tipoitem.id!).subscribe( (resposta) => {
      this.tipoitem.tipoItem = resposta.tipoItem
      this.tipoitem.descricao = resposta.descricao

    } )
  }

  delete(): void{
    this.service.delete(this.tipoitem.id!).subscribe( (resposta) => {
      
      this.router.navigate(['tipoitens'])
      this.service.mensagem('tipo de item deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancelar(): void{
    this.router.navigate(['tipoitens'])
  }

}
