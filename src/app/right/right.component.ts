import { Component, OnInit} from '@angular/core';
import { MainserviceService } from './../mainservice.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  dataList: any;
  fullList: any;
  newdataList: any[] = [];
  index: number;
  constructor(private mainData: MainserviceService) { }

  ngOnInit() {
    this.fetchData();
    this.mainData.info.subscribe(
      res => {
        if (res.index !== undefined) {
            if (res.check === true) {
                this.newdataList.push(this.fullList[res.index]);
                this.dataList = this.newdataList;
            } else {
                for (let i = 0; i < this.newdataList.length; i++) {
                  if (this.newdataList[i].type === this.fullList[res.index].type) {
                    delete this.newdataList[i];
                    this.newdataList.splice(i, 1);
                    console.log('Length --------', this.newdataList.length);
                    if (this.newdataList.length < 1) {
                      this.dataList = this.fullList;
                    }
                  }
                }
            }
        }
      },
      err => console.log(err)
    );
  }

  fetchData() {
          this.mainData.getData().subscribe(
            res => {
              this.dataList = res;
              this.fullList = res;
            },
            err => console.log(err)
          );
  }

}
