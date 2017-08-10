import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignPage } from '../campaign/campaign';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  Campaign()
  {
    this.navCtrl.push(CampaignPage);
  }

  slides = [
  {
  	title : "Slider 1",
  	description : "Welcome To My Dana",
  },
  {
  	title : "Slider 2",
  	description : "Welcome To My Dana",
  },
  {
  	title : "Slider 3",
  	description : "Welcome To My Dana",
  }
  ];
}
