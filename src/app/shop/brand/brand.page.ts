import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api/api.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {

  brands = [
    {name: 'Almay', code: 'almay', image: '../../../assets/brandImages/almay.jpeg'},
    {name: 'Alva', code: 'alva', image: '../../../assets/brandImages/alva.png'},
    {name: 'Anna Sui', code: 'anna sui', image: '../../../assets/brandImages/annaSui.jpeg'},
    {name: 'Annabelle', code: 'annabelle', image: '../../../assets/brandImages/annabelle.gif'},
    {name: 'Benefit', code: 'benefit', image: '../../../assets/brandImages/benefit.png'},
    {name: 'Boosh', code: 'boosh', image: '../../../assets/brandImages/boosh.png'},
    {name: `Burt's Bees`, code: `burt's bees`, image: '../../../assets/brandImages/burtsBees.png'},
    {name: 'Butter London', code: 'butter london', image: '../../../assets/brandImages/butterLondon.png'},
    {name: `C'est Moi`, code: `c'est moi`, image: '../../../assets/brandImages/cestMoi.png'},
    {name: 'Cargo Cosmetics', code: 'cargo cosmetics', image: '../../../assets/brandImages/cargoCosmetics.jpeg'},
    {name: 'China Glaze', code: 'china glaze', image: '../../../assets/brandImages/chinaGlaze.png'},
    {name: 'Clinique', code: 'clinique', image: '../../../assets/brandImages/clinique.png'},
    {name: 'Coastal Classic Creation', code: 'coastal classic creation', image: '../../../assets/brandImages/coastalClassicCreation.jpg'},
    {name: 'Colourpop', code: 'colourpop', image: '../../../assets/brandImages/colourpop.jpeg'},
    {name: 'Covergirl', code: 'covergirl', image: '../../../assets/brandImages/covergirl.png'},
    {name: 'Dalish', code: 'dalish', image: '../../../assets/brandImages/dalish.png'},
    {name: 'Deciem', code: 'deciem', image: '../../../assets/brandImages/deciem.png'},
    {name: 'Dior', code: 'dior', image: '../../../assets/brandImages/dior.png'},
    {name: 'Dr. Hauschka', code: 'dr. hauschka', image: '../../../assets/brandImages/drHauschka.png'},
    {name: 'e.l.f.', code: 'e.l.f.', image: '../../../assets/brandImages/elf.png'},
    {name: 'Essie', code: 'essie', image: '../../../assets/brandImages/essie.png'},
    {name: 'Fenty', code: 'fenty', image: '../../../assets/brandImages/fenty.png'},
    {name: 'Glossier', code: 'glossier', image: '../../../assets/brandImages/glossier.png'},
    {name: 'Green People', code: 'green people', image: '../../../assets/brandImages/greenPeople.jpg'},
    {name: 'Iman', code: 'iman', image: '../../../assets/brandImages/iman.jpeg'},
    {name: `L'oreal`, code: `L'oreal`, image: '../../../assets/brandImages/loreal.png'},
    {name: 'Lotus Cosmetics USA', code: 'lotus cosmetics usa', image: '../../../assets/brandImages/lotusCosmeticsUsa.png'},
    {name: `Maia's Mineral Galaxy`, code: `Maia's Mineral Galaxy`, image: '../../../assets/brandImages/maiasMineralGalaxy.png'},
    {name: 'Marcelle', code: 'marcelle', image: '../../../assets/brandImages/marcelle.png'},
    {name: 'Marienatie', code: 'marienatie', image: '../../../assets/brandImages/marienatie.png'},
    {name: 'Maybelline', code: 'maybelline', image: '../../../assets/brandImages/maybelline.png'},
    {name: 'Milani', code: 'milani', image: '../../../assets/brandImages/milani.png'},
    {name: 'Mineral Fusion', code: 'mineral fusion', image: '../../../assets/brandImages/mineralFusion.png'},
    {name: 'Misa', code: 'misa', image: '../../../assets/brandImages/misa.png'},
    {name: 'Mistura', code: 'mistura', image: '../../../assets/brandImages/mistura.jpeg'},
    {name: 'Moov', code: 'moov', image: '../../../assets/brandImages/moov.png'},
    {name: 'Nudus', code: 'nudus', image: '../../../assets/brandImages/nudus.jpeg'},
    {name: 'Nyx', code: 'nyx', image: '../../../assets/brandImages/nyx.png'},
    {name: 'Orly', code: 'orly', image: '../../../assets/brandImages/orly.png'},
    {name: 'Pacifica', code: 'pacifica', image: '../../../assets/brandImages/pacifica.png'},
    {name: 'Penny Lane Organics', code: 'penny lane organics', image: '../../../assets/brandImages/pennyLaneOrganics.gif'},
    {name: 'Physicians Formula', code: 'physicians formula', image: '../../../assets/brandImages/physiciansFormula.png'},
    {name: 'Piggy Paint', code: 'piggy paint', image: '../../../assets/brandImages/piggyPaint.png'},
    {name: 'Pure Anada', code: 'pure anada', image: '../../../assets/brandImages/pureAnada.jpeg'},
    {name: 'Rejuva Minerals', code: 'rejuva minerals', image: '../../../assets/brandImages/rejuvaMinerals.png'},
    {name: 'Revlon', code: 'revlon', image: '../../../assets/brandImages/revlon.png'},
    {name: `Sally B's Skin Yummies`, code: `sally b's skin yummies`, image: '../../../assets/brandImages/sallyB.jpeg'},
    {name: 'Salon Perfect', code: 'salon perfect', image: '../../../assets/brandImages/salonPerfect.png'},
    {name: 'Sante', code: 'sante', image: '../../../assets/brandImages/sante.png'},
    {name: 'Sinful Colours', code: 'sinful colours', image: '../../../assets/brandImages/sinfulColors.png'},
    {name: 'Smashbox', code: 'smashbox', image: '../../../assets/brandImages/smashbox.png'},
    {name: 'Stila', code: 'stila', image: '../../../assets/brandImages/stila.jpeg'},
    {name: 'Suncoat', code: 'suncoat', image: '../../../assets/brandImages/suncoat.jpeg'},
    {name: 'W3llpeople', code: 'w3llpeople', image: '../../../assets/brandImages/w3llpeople.png'},
    {name: 'Wet N Wild', code: 'wet n wild', image: '../../../assets/brandImages/wetNWild.png'},
    {name: 'Zorah', code: 'zorah', image: '../../../assets/brandImages/zorah.png'},
    {name: 'Zorah Biocosmetiques', code: 'zorah biocosmetiques', image: '../../../assets/brandImages/zorahBio.png'}
  ];

  id: string;
  results$: Observable<any>;

  product = [];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.results$ = this.api.getByBrand(this.id);
    }
  }

  changeMenu(id: string) {
    this.router.navigate(['shop','brand',id]);
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }

}
