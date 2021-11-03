import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tipoitem } from '../tipoitem.model';
import { tipoitenservice } from '../tipoitem.service';

@Component({
  selector: 'app-tipoitem-update',
  templateUrl: './tipoitem-update.component.html',
  styleUrls: ['./tipoitem-update.component.css']
})
export class tipoitemUpdateComponent implements OnInit {

  tipoitem: tipoitem = {
    id: '',
    tipoItem: '',
    descricao: ''
  }

  constructor(private service: tipoitenservice, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.tipoitem.id = this.route.snapshot.paramMap.get('id')! 
    this.findById();
  }

  findById(): void{
    this.service.findById(this.tipoitem.id!).subscribe( (resposta) => {
      this.tipoitem.tipoItem = resposta.tipoItem
      this.tipoitem.descricao = resposta.descricao
    })
  }

  update(): void{
    this.service.update(this.tipoitem).subscribe( (respsota) => {
      this.router.navigate(['tipoitens'])
      this.service.mensagem("tipo de item atualizado com sucesso!")
    }, err =>{
      for (let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void{
    this.router.navigate(['tipoitens']);
  }
}
