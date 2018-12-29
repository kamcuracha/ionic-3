import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  base64Image: string;
  url: string;
  postDataLoad: any;
  data: Observable<any>;

  constructor(public navCtrl: NavController,
    private camera: Camera,
    public http: HttpClient) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  uploadPicture() {
    this.url = "https://reqres.in/api/users";
    // FILE WONT WORK WITH BASE64IMG, USE FILE_URI
    this.postDataLoad = {
      "file": this.base64Image
    }
    this.data = this.http.post(this.url, this.postDataLoad);
    this.data.subscribe( res => {
      console.log(res);
    });
  }

}
