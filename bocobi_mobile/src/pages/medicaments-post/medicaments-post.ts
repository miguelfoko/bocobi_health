import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogPostInterface, PostType } from '../../model/BlogPost';
import { htmlDemoText } from '../../providers/Constant';
import { BlocPostDetailsPage } from '../bloc-post-details/bloc-post-details';

/**
 * Generated class for the MedicamentsPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicaments-post',
  templateUrl: 'medicaments-post.html',
})
export class MedicamentsPostPage {

  item: BlogPostInterface;
  health360ItemNews: Array<BlogPostInterface> = [{
    id: 1, img: 'assets/imgs/sample_1.jpg', title: "La cécité nocturne - êtes vous aveugle la nuit ?",
    smallDescription: " L'héméralopie est un état dans lequel une personne est incapable de voir la nuit ou en cas de faible luminosité. " + 
    "Il ne s'agit pas d'une affection ou d'une maladie en soi, mais plutôt d'un symptôme d'un autre problème oculaire sous-jacent.",
    publishedDate: "27 Jan 2018 11h25min",
    descriptionHTML: htmlDemoText
  },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title: "La cécité nocturne - êtes vous aveugle la nuit ?",
      smallDescription: " L'héméralopie est un état dans lequel une personne est incapable de voir la nuit ou en cas de faible luminosité. " + 
      "Il ne s'agit pas d'une affection ou d'une maladie en soi, mais plutôt d'un symptôme d'un autre problème oculaire sous-jacent.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText,
      postType: PostType.VIDEO_POST,
      videoURL: "https://www.youtube.com/embed/W3P3rT0j2gQ"
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title:  "La cécité nocturne - êtes vous aveugle la nuit ?",
      smallDescription: " L'héméralopie est un état dans lequel une personne est incapable de voir la nuit ou en cas de faible luminosité. " + 
      "Il ne s'agit pas d'une affection ou d'une maladie en soi, mais plutôt d'un symptôme d'un autre problème oculaire sous-jacent.",
      publishedDate: "27 Jan 2018 11h25min",
      descriptionHTML: htmlDemoText
    },
    {
      id: 1,
      img: 'assets/imgs/sample_1.jpg', title:  "La cécité nocturne - êtes vous aveugle la nuit ?",
      smallDescription: "L'héméralopie est un état dans lequel une personne est incapable de voir la nuit ou en cas de faible luminosité. " + 
      "Il ne s'agit pas d'une affection ou d'une maladie en soi, mais plutôt d'un symptôme d'un autre problème oculaire sous-jacent.",
      publishedDate: "27 Jan 2018 11h25min",
      descriptionHTML: htmlDemoText
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title:  "La cécité nocturne - êtes vous aveugle la nuit ?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11h25min",
      descriptionHTML: htmlDemoText,
      postType: PostType.VIDEO_POST,
      videoURL: "https://www.youtube.com/embed/W3P3rT0j2gQ"
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title:  "La cécité nocturne - êtes vous aveugle la nuit ?",
      smallDescription: " L'héméralopie est un état dans lequel une personne est incapable de voir la nuit ou en cas de faible luminosité. " + 
      "Il ne s'agit pas d'une affection ou d'une maladie en soi, mais plutôt d'un symptôme d'un autre problème oculaire sous-jacent.",
      publishedDate: "27 Jan 2018 11h25min",
      descriptionHTML: htmlDemoText
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title:  "La cécité nocturne - êtes vous aveugle la nuit ?",
      smallDescription: " L'héméralopie est un état dans lequel une personne est incapable de voir la nuit ou en cas de faible luminosité. " + 
      "Il ne s'agit pas d'une affection ou d'une maladie en soi, mais plutôt d'un symptôme d'un autre problème oculaire sous-jacent.",
      publishedDate: "27 Jan 2018 11h25min",
      descriptionHTML: htmlDemoText,
      postType: PostType.VIDEO_POST,
      videoURL: "https://www.youtube.com/embed/W3P3rT0j2gQ"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if (this.navParams.data != undefined) {
      this.item = this.navParams.data;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentsPostPage');
  }

  healthItemOnClick(item: BlogPostInterface) {
    this.navCtrl.push(BlocPostDetailsPage, item);
  }

}
