import { Component, VERSION } from '@angular/core';
import {CommentNode} from './comments/comment-tree.component'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})

export class AppComponent {
  ngVersion: string = VERSION.full;
  comments:Array<CommentNode> = [];
  constructor(){    
    this.comments =  [new CommentNode("First")]
  }
}



