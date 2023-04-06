import { Component, OnInit } from "@angular/core";
import { HeladocatI, HeladotipoI } from '../services/modelo.interface.data';
import { CmbDataService } from '../services/cmb-data.service';


@Component({
  selector: "app-registrar-helado",
  templateUrl: "./registrar-helado.component.html",
  styleUrls: ["./registrar-helado.component.scss"],
  providers:[ CmbDataService ]
})
export class RegistrarHeladoComponent implements OnInit {

  public selectedCat: HeladocatI = { heladocat_id: 0, heladocat_nom:''}
  public heladocats: HeladocatI[];
  public heladotipos: HeladotipoI[];

  heladoselect: any;

  constructor(private cmbdata: CmbDataService) {

  }

  ngOnInit(): void {
    this.heladocats = this.cmbdata.getHeladocat();
    this.heladotipos = this.cmbdata.getHeladotipo();
    /* console.log(this.selectedCat); */
    console.log(this.heladocats);
    console.log(this.heladotipos);
  }

  onSelect(idcat: any): void{
      console.log('este id: ', idcat);
      this.heladotipos = this.cmbdata.getHeladotipo().filter(item => item.heladocat_id == idcat);
  }

}
