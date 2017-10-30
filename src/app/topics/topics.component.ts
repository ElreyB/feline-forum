import { Component } from '@angular/core';
import { Topic } from './../topic.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  masterTopicList: Topic[] = [
    new Topic("Cat Care Forums"),
    new Topic("Cat Breeds, Breeding and Showing"),
    new Topic("Feral Cats and Rescue")
  ];


  addTopic(newTopicFromChild: Topic) {
    this.masterTopicList.push(newTopicFromChild);
  }
}
