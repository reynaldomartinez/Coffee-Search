import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
lat: number;
long: number;
  constructor(private http: HttpClient) { }

  getPosition() {
    navigator.geolocation.getCurrentPosition(resp => {
      console.log(resp.coords.longitude, resp.coords.latitude);
      this.lat = resp.coords.longitude;
      this.long = resp.coords.latitude;
      console.log('get position', this.lat + ',' + this.long );
    });
  }

  fetchCoffeePlaces(): Observable<Object> {
    const CLIENT_ID = 'CXIHIW45YIDTVE15PCTW2GKN0EFHFT0G0PZTUIUPHDYG540T';
    const CLIENT_SECRET = 'DEDVTRN5ASXKVYDQDXIT0BV33H3Q5G2GZRDHAGMHKXIUP3H1';

    this.getPosition();
    const myLat = '34.002131299999995';
    const myLng = '-84.0821395';
    console.log('fetch', this, this.lat, this.long);
    return this.http.get(`https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=5&ll=${myLat},${myLng}&query=coffee')`;
  }
}
