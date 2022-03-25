import { Component, OnInit } from '@angular/core';

//Olhar a aula de service para criar a estrutura e fazer a chamada da pagina simulando os cenarios de cors.

@Component({
  selector: 'app-cors',
  templateUrl: './cors.component.html',
  styleUrls: ['./cors.component.css']
})
export class CorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  async onCorsClick() {
    const response = await fetch("http://ec2co-ecsel-po4dwlap66c5-1686408491.us-east-2.elb.amazonaws.com/")
  }

}
