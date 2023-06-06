import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent {

  constructor(private http: HttpClient) { }

  

  apitest() {
    console.log("API CLICKED");
    
    const mango = {
      test: 29,
      alter: 23,
      name: "walter"
    }

    this.http.get<any>('http://82.165.127.5:3000',).subscribe((response) => {
      console.log(response);
    });

   
  }

}

