import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { routing } from './app.routing';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicForumComponent } from './topic-forum/topic-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    AddTopicComponent,
    TopicForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
