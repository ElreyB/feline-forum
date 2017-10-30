import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicForumComponent } from './topic-forum/topic-forum.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TopicsComponent
  },
  {
    path: 'add-topic',
    component: AddTopicComponent
  },
  {
    path: 'topic-forum',
    component: TopicForumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
