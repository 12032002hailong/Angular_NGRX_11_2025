import { Component, OnInit } from '@angular/core';
import { CourseCard } from './course-card/course-card';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getCourses } from './state/courses.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, AsyncPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {
  courses$: Observable<Course[]> | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(getCourses);
  }
}
