import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  teams=[
    {image:"assets/images/47.jpg",name:"Bryan Jhonson",role:"CEO & Co-Founder"},
    {image:"assets/images/38.jpg",name:"Mai Mohamed",role:"Designer"},
    {image:"assets/images/57.jpg",name:"Rokan Tech",role:"Developer"},
    {image:"assets/images/64.jpg",name:"Mariane Smith",role:"Customer Care"},

  
  ]

}
