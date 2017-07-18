import { Component, ViewChild } from '@angular/core';
import { IonicPage, AlertController, NavController, Nav, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../../pages/login/login';
import { FeedProvider, Feed } from '../../providers/feed/feed';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
 
  rootPage = 'FeedListPage';
  feeds: Feed[];

  constructor(private navController: NavController, public auth: Auth, private feedProvider: FeedProvider, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logOut(){
    this.auth.logout();
    this.navController.setRoot(LoginPage);
  }

  public addFeed() {
    let prompt = this.alertCtrl.create({
      title: 'Agregar RSS URL',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'El mejor sitio'
        },
        {
          name: 'url',
          placeholder: 'https://www.ion-book.com/feed.xml'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let newFeed = new Feed(data.name, data.url);
            this.feedProvider.addFeed(newFeed).then(
              res => {
                this.loadFeeds();
              }
            );
          }
        }
      ]
    });
    prompt.present();
  }
 
  private loadFeeds() {
    this.feedProvider.getSavedFeeds().then(
      allFeeds => {
        this.feeds = allFeeds;
      });
  }
 
  public openFeed(feed: Feed) {
    this.nav.setRoot('FeedListPage', { 'selectedFeed': feed });
  }
 
  public ionViewWillEnter() {
    this.loadFeeds();
  }

}
