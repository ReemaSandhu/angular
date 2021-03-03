import { Component, OnInit } from '@angular/core';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {

  // constructor(config: NgbModalConfig, private modalService: NgbModal) {
  //   config.backdrop = 'static';
  //   config.keyboard = false;
  // }

  // open(AnnouncementModal: any) {
  //   this.modalService.open(AnnouncementModal);
  // }

  public isMenuCollapsed = true;
  ngOnInit(): void {
  }

}
