import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ThemeSettings {
  id?: string;
  primaryColor: string;
  accentColor: string;
  logoUrl: string;
  fontFamily: string;
  siteName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private apiUrl = `${environment.apiUrl}/theme-settings`;
  private themeSettingsSubject = new BehaviorSubject<ThemeSettings | null>(null);
  themeSettings$ = this.themeSettingsSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadThemeSettings();
  }

  loadThemeSettings() {
    this.http.get<ThemeSettings[]>(this.apiUrl).subscribe(settings => {
      if (settings && settings.length > 0) {
        this.themeSettingsSubject.next(settings[0]);
        this.applyTheme(settings[0]);
      } else {
        // Default settings
        const defaultSettings: ThemeSettings = {
          primaryColor: '#b07d50',
          accentColor: '#6c757d',
          logoUrl: '',
          fontFamily: 'Oswald, "Helvetica Neue", sans-serif',
          siteName: 'LumiNex'
        };
        this.themeSettingsSubject.next(defaultSettings);
        this.applyTheme(defaultSettings);
      }
    });
  }

  updateThemeSettings(settings: ThemeSettings) {
    const id = settings.id || '1';
    return this.http.put(`${this.apiUrl}/${id}`, { ...settings, id }).pipe(
      tap(() => {
        this.themeSettingsSubject.next(settings);
        this.applyTheme(settings);
      })
    );
  }

  private applyTheme(settings: ThemeSettings) {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', settings.primaryColor);
      root.style.setProperty('--accent-color', settings.accentColor);
      root.style.setProperty('--font-family', settings.fontFamily);
      
      // Update site title and favicon could also be done here if needed
      document.title = settings.siteName;
    }
  }
}
