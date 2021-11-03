import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tipoitem } from '../tipoitem.model';
import { tipoitenservice } from '../tipoitem.service';

@Component({
  selector: 'app-tipoitem-read',
  templateUrl: './tipoitem-read.component.html',
  styleUrls: ['./tipoitem-read.component.css']
})
export class tipoitemReadComponent implements OnInit {
  tipoitens: tipoitem[] = [];

  displayedColumns: string[] = ['id', 'tipoItem', 'descricao', 'acoes'];

  constructor(private service: tipoitenservice, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  } 

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.tipoitens = resposta;
    });
  }

  navegarParatipoitemCreate(){
    this.router.navigate(["tipoitens/create"]);
  }
  
}
