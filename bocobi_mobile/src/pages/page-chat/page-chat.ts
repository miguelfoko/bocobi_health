import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-chat',
  templateUrl: 'page-chat.html',
})
export class PageChatPage {

  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'assets/icon/doctor_speak.svg',
    username: 'Minto',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'assets/icon/doctor_speak.svg',
    username: 'Piash',
  };

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'OH CRAP!!'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'pardon ??'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Juste un message de salutation'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Merçi vrament gentille de votre part'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'ok??'
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'cool!'
    }
  ];

  @ViewChild(Content) content: Content;

  public messageForm: any;
  chatBox: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageChatPage');
  }

  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);
      const messageData =
        {
          toId: this.toUser._id,
          _id: 6,
          date: new Date(),
          userId: this.user._id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'merci de laisser votre message. Nous y repondrons ultérieurement'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }


}
