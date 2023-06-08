import {Component, Input} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  topText = '';
  memeName = '';
  bottomText = '';

  showUrl = '.....';

  newTopText = '';
  newBottomText = '';
  getTopText(){
    let topText = (<HTMLInputElement> document.getElementById("topText")).value;
    if(topText){
      this.topText = topText;
    }
  }

  getBottomText(){
    let bottomText = (<HTMLInputElement>document.getElementById("bottomText")).value;
    if(bottomText){
      this.bottomText = bottomText;
    }
  }

  getMemeName(){
    let memeName = (<HTMLInputElement> document.getElementById("memeName")).value;
    if(memeName){
      this.memeName = memeName;
    }
  }

 imageUrl:any = 'assets/default.jpeg';
  updateImage: any = '';
  async getMemes() {

    const options = {
      method: 'GET',
      url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
      params: {
        top: this.topText,
        bottom: this.bottomText,
        meme: this.memeName,
        font_size: '50',
        font: 'Impact'
      },
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
      },
      responseType: 'blob'
    };

    try {
      // @ts-ignore
      const response = await axios.request(options);
      let blob = response.data;
      let reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          this.imageUrl = reader.result;
          console.log(this.imageUrl);
        }
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error(error);
    }
  }

  getFileUpload(event: any){
    this.updateImage = event.target.files[0];
  }

  createMeme(){
    const reader = new FileReader();
    reader.onloadend = () =>{
      this.imageUrl = reader.result;
      console.log(this.imageUrl)
    };
    reader.readAsDataURL(this.updateImage);
    this.newTopText = this.topText;
    this.newBottomText = this.bottomText;
  }
}
