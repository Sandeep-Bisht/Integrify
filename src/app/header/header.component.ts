import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  constructor() { }
  bgTransparent = true;
  // @HostListener('window:scroll', ['$event'])
  services = [
    {
      id: 1,
      icon: '../../assets/images/content.png',
      title: "Global database",
      description: "Screening of an individual name & details through several database of government agencies like law enforcement, most wanted lists & other lists of regulatory bodies."
    },
    {
      id: 1,
      icon: '../../assets/images/content.png',
      title: "Global database",
      description: "Screening of an individual name & details through several database of government agencies like law enforcement, most wanted lists & other lists of regulatory bodies."
    },
    {
      id: 1,
      icon: '../../assets/images/content.png',
      title: "Global database",
      description: "Screening of an individual name & details through several database of government agencies like law enforcement, most wanted lists & other lists of regulatory bodies."
    },
    {
      id: 1,
      icon: '../../assets/images/content.png',
      title: "Global database",
      description: "Screening of an individual name & details through several database of government agencies like law enforcement, most wanted lists & other lists of regulatory bodies."
    },
    // Add more service objects as needed
  ];
  onWindowScroll($event:any) {
      if(window.scrollY > 10) {
        this.bgTransparent = false
      } else {
        this.bgTransparent = true
      }
  }
  desktopView = false;
  ngOnInit(): void {
  }
}
