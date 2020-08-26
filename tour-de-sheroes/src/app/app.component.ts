import { Component, VERSION, OnInit, OnDestroy } from '@angular/core';
import {CommentNode} from './comments/comment-tree.component';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})

export class AppComponent implements OnInit, OnDestroy{
  ngVersion: string = VERSION.full;
  comments:Array<CommentNode> = [];
  mediaSub:Subscription ;
  deviceXs: boolean;
  constructor(public mediaObserver:MediaObserver ){    
    this.comments =  [new CommentNode("First")]
  }
  ngOnInit (){
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}




