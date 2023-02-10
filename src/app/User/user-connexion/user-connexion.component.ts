import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css']
})
export class UserConnexionComponent {
  constructor(private http: HttpClient) { }

  getData(collection: string) {
    return this.http.get(`http://localhost:3000/${collection}`);
  }
}
