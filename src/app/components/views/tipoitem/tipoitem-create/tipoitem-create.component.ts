import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tipoitem } from '../tipoitem.model';
import { tipoitenservice } from '../tipoitem.service';

@Component({
  selector: 'app-tipoitem-create',
  templateUrl: './tipoitem-create.component.html',
  styleUrls: ['./tipoitem-create.component.css']
})
export class tipoitemCreateComponent implements OnInit {
  tipoitem: tipoitem = {
    tipoItem: '',
    descricao: ''
  }

  constructor(private service: tipoitenservice, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.tipoitem).subscribe((resposta) => {
      this.router.navigate(['tipoitens'])
      this.service.mensagem('tipoitem criado com sucesso!');
    }, err =>{
      for (let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancela(): void{
    this.router.navigate(['tipoitens'])
  }
}
