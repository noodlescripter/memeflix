import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import axios, {AxiosResponse} from "axios";

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent {
  imageUrl:any = '';
  /*imageUrl:any = '';
  async getMemes() {

    const options = {
      method: 'GET',
      url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
      params: {
        top: 'Top Text',
        bottom: 'Bottom Text',
        meme: 'Condescending-Wonka',
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
  }*/

}
