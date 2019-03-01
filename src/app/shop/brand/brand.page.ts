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
    {name: 'Almay', code: 'almay'},
    {name: 'Alva', code: 'alva'},
    {name: 'Anna Sui', code: 'anna sui'},
    {name: 'Annabelle', code: 'annabelle'},
    {name: 'Benefit', code: 'benefit'},
    {name: 'Boosh', code: 'boosh'},
    {name: `Burt's Bees`, code: `burt's bees`},
    {name: 'Butter London', code: 'butter london'},
    {name: `C'est Moi`, code: `c'est moi`},
    {name: 'Cargo Cosmetics', code: 'cargo cosmetics'},
    {name: 'China Glaze', code: 'china glaze'},
    {name: 'Clinique', code: 'clinique'},
    {name: 'Coastal Classic Creation', code: 'coastal classic creation'},
    {name: 'Colourpop', code: 'colourpop'},
    {name: 'Covergirl', code: 'covergirl'},
    {name: 'Dalish', code: 'dalish'},
    {name: 'Deciem', code: 'deciem'},
    {name: 'Dior', code: 'dior'},
    {name: 'Dr. Hauschka', code: 'dr. hauschka'},
    {name: 'e.l.f.', code: 'e.l.f.'},
    {name: 'Essie', code: 'essie'},
    {name: 'Fenty', code: 'fenty'},
    {name: 'Glossier', code: 'glossier'},
    {name: 'Green People', code: 'green people'},
    {name: 'Iman', code: 'iman'},
    {name: `L'oreal`, code: `L'oreal`},
    {name: 'Lotus Cosmetics USA', code: 'lotus cosmetics usa'},
    {name: `Maia's Mineral Galaxy`, code: `Maia's Mineral Galaxy`},
    {name: 'Marcelle', code: 'marcelle'},
    {name: 'Marienatie', code: 'marienatie'},
    {name: 'Maybelline', code: 'maybelline'},
    {name: 'Milani', code: 'milani'},
    {name: 'Mineral Fusion', code: 'mineral fusion'},
    {name: 'Misa', code: 'misa'},
    {name: 'Mistura', code: 'mistura'},
    {name: 'Moov', code: 'moov'},
    {name: 'Nudus', code: 'nudus'},
    {name: 'Nyx', code: 'nyx'},
    {name: 'Orly', code: 'orly'},
    {name: 'Pacifica', code: 'pacifica'},
    {name: 'Penny Lane Organics', code: 'penny lane organics'},
    {name: 'Physicians Formula', code: 'physicians formula'},
    {name: 'Piggy Paint', code: 'piggy paint'},
    {name: 'Pure Anada', code: 'pure anada'},
    {name: 'Rejuva Minerals', code: 'rejuva minerals'},
    {name: 'Revlon', code: 'revlon'},
    {name: `Sally B's Skin Yummies`, code: `sally b's skin yummies`},
    {name: 'Salon Perfect', code: 'salon perfect'},
    {name: 'Sante', code: 'sante'},
    {name: 'Sinful Colors', code: 'sinful colors'},
    {name: 'Smashbox', code: 'smashbox'},
    {name: 'Stila', code: 'stila'},
    {name: 'Suncoat', code: 'suncoat'},
    {name: 'W3llpeople', code: 'w3llpeople'},
    {name: 'Wet N Wild', code: 'wet n wild'},
    {name: 'Zorah', code: 'zorah'},
    {name: 'Zorah Biocosmetiques', code: 'zorah biocosmetiques'}
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
    this.router.navigate(['shop','product-page']);
  }

}
