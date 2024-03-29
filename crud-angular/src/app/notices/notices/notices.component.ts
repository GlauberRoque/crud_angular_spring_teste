import { Component, OnInit } from '@angular/core';
import { Notices } from '../model/notices';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  data = new Date();
  notices: Notices[] = [
    { _id: '1', title: 'What is Lorem Ipsum?', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', publicationDate:  , dateView:  }
  ];
  displayedColumns = [ 'title', 'description', 'publicationDate', 'dateView' ];

  constructor() { }

  ngOnInit(): void { }

}
