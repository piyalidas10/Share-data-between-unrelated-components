import { Component, OnInit } from '@angular/core';
import { MainserviceService } from './../mainservice.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  data: any;
  selectedType: any;
  constructor(private mainData: MainserviceService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.mainData.getData().subscribe(
      res => {
        this.data = res;
      },
      err => console.log(err)
    );
  }

  changeByType(evt, i) {
    if ( evt.target.checked ) {
      const isChecked = evt.target.checked;
      this.mainData.filterData(isChecked, i);
    } else {
      const isChecked = evt.target.checked;
      this.mainData.filterData(isChecked, i);
    }
  }

}
