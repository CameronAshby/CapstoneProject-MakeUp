import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api/api.service';
import {LoadingController} from '@ionic/angular';
import {LoginService} from '../../service/login/login.service';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.page.html',
  styleUrls: ['./qualities.page.scss'],
})
export class QualitiesPage implements OnInit {
  qualities = [
    {name: 'Canadian', code: 'Canadian', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'CertClean', code: 'CertClean', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Dairy Free', code: 'Dairy Free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'EWG Verified', code: 'EWG Verified', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'EcoCert', code: 'EcoCert', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Fair Trade', code: 'Fair Trade', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Gluten Free', code: 'Gluten Free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Hypoallergenic', code: 'Hypoallergenic', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Natural', code: 'Natural', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'No Talc', code: 'No Talc', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Non-GMO', code: 'Non-GMO', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Organic', code: 'Organic', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Peanut Free Product', code: 'Peanut Free Product', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Sugar Free', code: 'Sugar Free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'USDA Organic', code: 'USDA Organic', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Vegan', code: 'Vegan', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Alcohol Free', code: 'alcohol free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Cruelty Free', code: 'cruelty free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Oil Free', code: 'oil free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Purpicks', code: 'purpicks', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Silicone Free', code: 'silicone free', image: '../../../assets/logoImages/camlogo.png'},
    {name: 'Water Free', code: 'water free', image: '../../../assets/logoImages/camlogo.png'},
  ];

  id: string;

  qualityArray = [];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private loader: LoadingController, public loginService: LoginService) { }

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
