import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts=[  
    {
      name: 'Tulipanes',
      description: 'Ramo de tulipanes',
      img:"https://i1.wp.com/www.tecnicomo.com/wp-content/uploads/2017/03/Las-mejores-p%C3%A1ginas-web-para-ordenar-flores-online-9.jpg?resize=333%2C250",
      rank:"star"
    },
    {
      name: 'Motocicleta',
      description: 'Motocicleta azul',
      img:"https://cdn.xl.thumbs.canstockphoto.es/moto-icono-clip-art-vectorial_csp43571662.jpg",
      rank:"star"
    },
    {
      name: 'Multiplataforma',
      description: 'Tablet y celular',
      img:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2014/10/67621-jimdo-app-crear-tu-propia-pagina-web-smartphone-tablet.jpg?itok=1EeHAlsf",
      rank:"star"
    },
    {
      name: 'Gorra',
      description: 'Gorra',
      img:"https://image.jimcdn.com/app/cms/image/transf/none/path/s36658c87bf479136/image/i9040edc4a250d572/version/1487605795/image.jpg",
      rank:"star"
    }
];

  constructor() { }
}
