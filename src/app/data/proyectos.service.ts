import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private readonly url = environment.apiUrl + 'projects/';

  constructor(private http: HttpClient) {}

  public postProyecto$(proyecto: any): Observable<any> {
    return this.http.post<{ data: any }>(this.url, proyecto).pipe(map(res => res.data));
  }

  public getProyectos$(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.url);
  }

  public getProyectoById$(id: string): Observable<any> {
    return this.http.get<any>(this.url + id).pipe(map(res => res.data));
  }

  public putProyecto$(proyecto: any): Observable<any> {
    return this.http
      .put<{ data: any }>(this.url + proyecto.id, proyecto)
      .pipe(map(res => res.data));
  }
  public deleteProyectoById$(id: string): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }
}
