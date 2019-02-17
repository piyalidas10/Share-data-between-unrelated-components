import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainserviceService {
  dataURL: any;
  dataDefault = [
    {
      check : false,
      index : 0
    }
  ];
  filterDT: any;
  constructor(private http: HttpClient) {
    this.dataURL = 'assets/data.json';
  }

  private dataSource = new BehaviorSubject<any>(this.dataDefault);
  info = this.dataSource.asObservable();

  getData() {
    return this.http.get(this.dataURL);
  }

  filterData(val, i) {
    console.log(val);
    this.dataSource.next({check: val, index: i});
  }
}
