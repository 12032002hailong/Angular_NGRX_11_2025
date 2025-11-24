import { Course } from '../../models/course.model';

export interface CoursesState {
  courses: Course[];
}

export const initialState: CoursesState = {
  courses: [
    {
      id: 1,
      title: 'Angular & NgZorro: Master Class 2025',
      description:
        'Deep dive into building enterprise-level applications using Angular and the powerful NgZorro UI library. Learn best practices and optimization.',
      image: 'https://placehold.co/600x400/dd0031/ffffff?text=Angular+Mastery',
      author: 'John Doe',
      price: 49.99,
    },
    {
      id: 2,
      title: 'ABP Framework & .NET 8 Microservices',
      description:
        'Complete guide to building scalable microservices using the ABP Framework and .NET 8. Covers DDD, modular architecture, and deployment.',
      image: 'https://placehold.co/600x400/512bd4/ffffff?text=ABP+.NET+Core',
      author: 'Sarah Smith',
      price: 89.99,
    },
    {
      id: 3,
      title: 'Advanced TypeScript Patterns',
      description:
        'Master advanced TypeScript concepts including Generics, Decorators, and Utility Types to write cleaner and more robust code.',
      image: 'https://placehold.co/600x400/3178c6/ffffff?text=TypeScript+Pro',
      author: 'Michael Chen',
      price: 34.5,
    },
    {
      id: 4,
      title: 'Fullstack Development with RxJS',
      description:
        'Reactive programming from scratch. Learn how to manage state effectively and handle asynchronous data streams in complex apps.',
      image: 'https://placehold.co/600x400/b71c1c/ffffff?text=RxJS+Reactive',
      author: 'Emily Watson',
      price: 25.0,
    },
    {
      id: 5,
      title: 'Web UI/UX Design Principles',
      description:
        'Learn the fundamentals of UI/UX design for developers. Color theory, typography, spacing, and creating accessible user interfaces.',
      image: 'https://placehold.co/600x400/009688/ffffff?text=UI+UX+Design',
      author: 'David Lee',
      price: 19.99,
    },
  ],
};
