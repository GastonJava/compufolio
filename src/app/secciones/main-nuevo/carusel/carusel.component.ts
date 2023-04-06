/*
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { Subject, SubscriptionLike } from "rxjs";
import { CaruselimgService } from "./caruselimg.service";
import { CaruselSharedService } from "./caruselShared.service";

@Component({
  selector: "app-carusel",
  templateUrl: "./carusel.component.html",
  styleUrls: ["./carusel.component.scss"],
})
@NgModule({
  exports: [CarouselModule],
})
export class CaruselComponent implements OnInit, OnDestroy {


  @Input() subscri: Function;

  detenerEnvio: SubscriptionLike;

  image_img: any;
  image_subs: any;


  enviandoDatos: Boolean;


  _isLoadingimg: Boolean;
  imgurl: string = "";
  imageblob: any;
  res: any;

  constructor(
    private _config: NgbCarouselConfig,
    public srv: CaruselimgService,
    private srvshared: CaruselSharedService
  ) {
    _config.interval = 0;
    _config.wrap = false;
    _config.pauseOnHover = false;
    _config.showNavigationArrows = true;
  }

  ngOnInit() {
    this.image_img = document.getElementById("imgsrc");

    this.srvshared.subsVar = this.srvshared.invocarSubscription.subscribe(
      () => {
        this.subscribir();
      }
    );

    this.srvshared.subsUnsubs = this.srvshared.invocarUnsubscription.subscribe(
      () => {
        this.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {}

  imgBase64: any;
  imgres: any;

  crearImagenBlob(image: Blob) {
    this.imgBase64 = image; 
    const reader = new FileReader();
    reader.readAsDataURL(this.imgBase64);
    reader.onloadend = () => {
      this.imgres = reader.result;
    };
  }


  unsubscribe() {
    this.enviandoDatos = false;
    if (!this.enviandoDatos) {
      this.detenerEnvio.unsubscribe();
    }
  }

  subscribir() {
    this.enviandoDatos = true;

    if (this.enviandoDatos) {
      return (this.detenerEnvio = this.srv.httpGetURL().subscribe(
        (data) => {
          this.crearImagenBlob(data);

          console.log("me eh vuelto a subscribir: " + data);
        },
        (error) => {
          this._isLoadingimg = false;
          console.log(error);
        }
      ));
    }
  }

  listas: any[] = [
    {
      name: "Random images",
      img: this.res,

      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },

    {
      name: 'Flutter',
      img: 'assets/flutter.png',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Scrum Mastering',
      img: 'assets/scrum.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit.',
    }
  ]; 
}
*/