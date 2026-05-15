import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SiteContent } from '../models/site-content';

@Injectable({
  providedIn: 'root'
})
export class SiteContentService {
  private apiUrl = 'http://localhost:3000/site-content';

  constructor(private http: HttpClient) {}

  /**
   * Get all site content (returns array, we take first item)
   */
  getSiteContent(): Observable<SiteContent | null> {
    return this.http.get<SiteContent[]>(this.apiUrl).pipe(
      map(contents => contents.length > 0 ? contents[0] : null),
      catchError(error => {
        console.error('Error fetching site content:', error);
        return of(null);
      })
    );
  }

  /**
   * Get site content by ID
   */
  getSiteContentById(id: string | number): Observable<SiteContent | null> {
    return this.http.get<SiteContent>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching site content:', error);
        return of(null);
      })
    );
  }

  /**
   * Create new site content
   */
  createSiteContent(content: SiteContent): Observable<SiteContent> {
    return this.http.post<SiteContent>(this.apiUrl, content);
  }

  /**
   * Update existing site content
   */
  updateSiteContent(id: string | number, content: Partial<SiteContent>): Observable<SiteContent> {
    return this.http.patch<SiteContent>(`${this.apiUrl}/${id}`, content);
  }

  /**
   * Update entire site content (full replace)
   */
  updateSiteContentFull(id: string | number, content: SiteContent): Observable<SiteContent> {
    return this.http.put<SiteContent>(`${this.apiUrl}/${id}`, content);
  }

  /**
   * Delete site content
   */
  deleteSiteContent(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Get active site content (for public homepage)
   */
  getActiveContent(): Observable<SiteContent | null> {
    return this.http.get<SiteContent[]>(`${this.apiUrl}?isActive=true`).pipe(
      map(contents => contents.length > 0 ? contents[0] : null),
      catchError(error => {
        console.error('Error fetching active site content:', error);
        return of(null);
      })
    );
  }
}
