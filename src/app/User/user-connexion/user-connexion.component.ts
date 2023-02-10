import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css']
})
export class UserConnexionComponent implements OnInit
{
  users$!: Observable<any>
  users!: {};
  private baseUrl = 'https://fakestoreapi.com/products/';


  constructor() { }

  getUser(): Observable<any> {
    
    return this.http.get<any>(`${this.baseUrl}`);
  }

  ngOnInit(): void {
    
    this.users$ = getUser();
  }

}
