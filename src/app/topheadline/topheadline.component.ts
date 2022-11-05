import { Component, OnInit } from '@angular/core';
import {tcnewsapi} from '../service/tcnewsapi.service';


@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:tcnewsapi) { }


  topHeadlineData:any=[];

  ngOnInit(): void {

    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlineData=result.articles;
    })

  }

}
