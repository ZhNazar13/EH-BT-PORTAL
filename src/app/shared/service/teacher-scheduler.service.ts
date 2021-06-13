import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/dist/types';

@Injectable({
  providedIn: 'root'
})
export class TeacherSchedulerService{
  private readonly TEACHER_SCHEDULER_CONTROLLER = '/api/private/v1/scheduler/teacher';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:only-arrow-functions
  private readonly HTTP_OPTIONS = function(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      })
    };
  };

  getTeacherScheduler(teacherId): Observable<any> {
    return this.http.get(`${this.TEACHER_SCHEDULER_CONTROLLER}/all/teacherId/${teacherId}`, this.HTTP_OPTIONS());
  }
}
