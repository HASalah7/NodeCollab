import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserConnexionComponent } from './user-connexion.component';

export class UserService {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }
}
describe('UserConnexionComponent', () => {
  let component: UserConnexionComponent;
  let fixture: ComponentFixture<UserConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
