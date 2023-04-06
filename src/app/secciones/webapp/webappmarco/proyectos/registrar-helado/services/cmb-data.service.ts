import { Injectable } from '@angular/core';
import { HeladocatI, HeladotipoI } from './modelo.interface.data';

@Injectable()
export class CmbDataService {
  private heladocat: HeladocatI[] =
  [
    {
      heladocat_id: 0,
      heladocat_nom: "Selecciona Helado"
    },
    {
      heladocat_id: 1,
      heladocat_nom: "palito" /* agua, crema, crocantes, suizo */
    },
    {
      heladocat_id: 2,
      heladocat_nom: "vasos", /* 1/8, 1/4, 1/2, 1kg */
    },
  ];

  private heladotipo: HeladotipoI[] = [

    /* tipos de helados heladocat_id = 1 */
    {
      /* tipo agua */
      heladotipo_id: 1,
      heladocat_id: 1,
      heladotipo_nom: "Agua"
    },
    {
      /* tipo crema */
      heladotipo_id: 2,
      heladocat_id: 1,
      heladotipo_nom: "Crema"
    },
    {
      /* tipo crocantes */
      heladotipo_id: 3,
      heladocat_id: 1,
      heladotipo_nom: "Crocantes"
    },
    {
      /* tipo suizo */
      heladotipo_id: 4,
      heladocat_id: 1,
      heladotipo_nom: "Suizo"
    },

    // tamanio de vasos de helados... heladocat_id = 2

    {
      /* tipo tamanio */
      heladotipo_id: 1,
      heladocat_id: 2,
      heladotipo_nom: "1kg"
    },

    {
      /* tipo tamanio */
      heladotipo_id: 2,
      heladocat_id: 2,
      heladotipo_nom: "1/2"
    },

    {
      /* tipo tamanio */
      heladotipo_id: 3,
      heladocat_id: 2,
      heladotipo_nom: "1/4"
    },

    {
      /* tipo tamanio */
      heladotipo_id: 4,
      heladocat_id: 2,
      heladotipo_nom: "1/8"
    },
    
  ]

  getHeladocat(): HeladocatI []{
    return this.heladocat;
  }

  getHeladotipo(): HeladotipoI[]{
    return this.heladotipo;
  }
}