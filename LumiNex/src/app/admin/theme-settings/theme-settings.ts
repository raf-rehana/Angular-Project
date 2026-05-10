import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeSettings } from '../../core/services/theme.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  template: `
    <div class="theme-settings-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Dynamic Theme Builder</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form #themeForm="ngForm" (ngSubmit)="saveSettings()">
            <div class="form-grid">
              <mat-form-field appearance="outline">
                <mat-label>Site Name</mat-label>
                <input matInput [(ngModel)]="settings.siteName" name="siteName" required>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Logo URL</mat-label>
                <input matInput [(ngModel)]="settings.logoUrl" name="logoUrl" required>
              </mat-form-field>

              <div class="color-pickers">
                <div class="color-field">
                  <label>Primary Color</label>
                  <input type="color" [(ngModel)]="settings.primaryColor" name="primaryColor">
                  <span>{{settings.primaryColor}}</span>
                </div>

                <div class="color-field">
                  <label>Accent Color</label>
                  <input type="color" [(ngModel)]="settings.accentColor" name="accentColor">
                  <span>{{settings.accentColor}}</span>
                </div>
              </div>

              <mat-form-field appearance="outline">
                <mat-label>Font Family</mat-label>
                <input matInput [(ngModel)]="settings.fontFamily" name="fontFamily" placeholder='e.g. "Inter", sans-serif'>
              </mat-form-field>
            </div>

            <div class="actions">
              <button mat-raised-button color="primary" type="submit" [disabled]="!themeForm.valid">
                Save & Apply Changes
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>

      <div class="preview-section">
        <h3>Live Preview</h3>
        <div class="preview-card" [style.border-top-color]="settings.primaryColor">
          <div class="preview-header" [style.background-color]="settings.primaryColor">
            <img [src]="settings.logoUrl" alt="Logo" class="preview-logo">
            <span class="preview-site-name">{{settings.siteName}}</span>
          </div>
          <div class="preview-content" [style.font-family]="settings.fontFamily">
            <p>This is a preview of how your brand will look across the platform.</p>
            <button mat-flat-button [style.background-color]="settings.accentColor" style="color: white">
              Accent Button
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .theme-settings-container {
      padding: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .form-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 16px;
    }
    .color-pickers {
      display: flex;
      gap: 32px;
      padding: 16px 0;
    }
    .color-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .color-field input[type="color"] {
      width: 60px;
      height: 40px;
      border: none;
      cursor: pointer;
    }
    .actions {
      margin-top: 24px;
      display: flex;
      justify-content: flex-end;
    }
    .preview-section {
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .preview-card {
      background: white;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-top: 4px solid;
      overflow: hidden;
    }
    .preview-header {
      padding: 16px;
      color: white;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .preview-logo {
      height: 32px;
      width: auto;
    }
    .preview-site-name {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .preview-content {
      padding: 24px;
    }
    @media (max-width: 768px) {
      .theme-settings-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ThemeSettingsComponent implements OnInit {
  settings: ThemeSettings = {
    primaryColor: '#0d6efd',
    accentColor: '#6c757d',
    logoUrl: 'assets/logo.png',
    fontFamily: 'Roboto, sans-serif',
    siteName: 'LumiNex'
  };

  constructor(
    private themeService: ThemeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.themeService.themeSettings$.subscribe(settings => {
      if (settings) {
        this.settings = { ...settings };
      }
    });
  }

  saveSettings() {
    this.themeService.updateThemeSettings(this.settings).subscribe({
      next: () => {
        this.snackBar.open('Theme settings updated successfully!', 'Close', {
          duration: 3000
        });
      },
      error: (err) => {
        console.error('Failed to update theme', err);
        this.snackBar.open('Failed to update theme settings', 'Close', {
          duration: 3000
        });
      }
    });
  }
}
