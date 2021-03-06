import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the CampaignPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html',
})
export class CampaignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  Detail()
  {
  	this.navCtrl.push(DetailPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignPage');
  }

}
