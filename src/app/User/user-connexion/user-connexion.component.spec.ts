import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { UserConnexionComponent } from './user-connexion.component';

export class DataService {

  constructor(private http: HttpClient) { }

  // getData():Observable: <User[]> {
  //   return this.http.get<User(`http://localhost:3000/${users}`);
  // }
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
