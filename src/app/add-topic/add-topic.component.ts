import { Component, Output, EventEmitter } from '@angular/core';
import { Topic } from './../topic.model';

@Component({
  selector: 'add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})

export class AddTopicComponent {
  @Output() newTopicSender = new EventEmitter();
  submitForm(title: string){
    let newTopicToAdd: Topic = new Topic(title);
    this.newTopicSender.emit(newTopicToAdd);
  }
}
