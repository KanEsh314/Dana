import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DetailPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  overviewRoot = 'OverviewPage'
  commentRoot = 'CommentPage'
  currentRoot = 'CurrentPage'


  constructor(public navCtrl: NavController) {}

}
