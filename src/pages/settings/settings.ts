import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Settings } from '../../models/settings';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public settings:Settings;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settings = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
