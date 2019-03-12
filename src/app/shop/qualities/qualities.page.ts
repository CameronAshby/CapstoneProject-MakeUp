import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api/api.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.page.html',
  styleUrls: ['./qualities.page.scss'],
})
export class QualitiesPage implements OnInit {
  qualities = [
    {name: 'Canadian', code: 'Canadian'},
    {name: 'CertClean', code: 'CertClean'},
    {name: 'Dairy Free', code: 'Dairy Free'},
    {name: 'EWG Verified', code: 'EWG Verified'},
    {name: 'EcoCert', code: 'EcoCert'},
    {name: 'Fair Trade', code: 'Fair Trade'},
    {name: 'Gluten Free', code: 'Gluten Free'},
    {name: 'Hypoallergenic', code: 'Hypoallergenic'},
    {name: 'Natural', code: 'Natural'},
    {name: 'No Talc', code: 'No Talc'},
    {name: 'Non-GMO', code: 'Non-GMO'},
    {name: 'Organic', code: 'Organic'},
    {name: 'Peanut Free Product', code: 'Peanut Free Product'},
    {name: 'Sugar Free', code: 'Sugar Free'},
    {name: 'USDA Organic', code: 'USDA Organic'},
    {name: 'Vegan', code: 'Vegan'},
    {name: 'Alcohol Free', code: 'alcohol free'},
    {name: 'Cruelty Free', code: 'cruelty free'},
    {name: 'Oil Free', code: 'oil free'},
    {name: 'Purpicks', code: 'purpicks'},
    {name: 'Silicone Free', code: 'silicone free'},
    {name: 'Water Free', code: 'water free'},
  ];

  id: string;

  qualityArray = [];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private loader: LoadingController) { }

  ngOnInit() {
    if(this.api.apiArray.length === 0) {
      this.getApiArray();
    }

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.qualityArray = this.api.getByQuality(this.id);
    }
  }

  changeMenu(id: string) {
    this.router.navigate(['shop','qualities',id]);
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }

  async getApiArray() {
    const loading = await this.loader.create();
    loading.present().then(() => {
      this.api.initializeAPI().subscribe((data) => {
        this.api.apiArray = data;
        console.log(data);
        loading.dismiss();
      })
    });
  }
}
