import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeSettings } from '../../core/services/theme.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  template: `
    <div class="theme-builder-wrapper">

      <!-- Header -->
      <div class="page-header">
        <div class="header-icon">
          <mat-icon>palette</mat-icon>
        </div>
        <div>
          <h1 class="page-title">Theme Builder</h1>
          <p class="page-subtitle">Customize your brand identity and visual style</p>
        </div>
      </div>

      <div class="theme-layout">

        <!-- LEFT: Settings Form -->
        <div class="settings-panel">

          <!-- Site Identity -->
          <div class="section-card">
            <div class="section-header">
              <mat-icon class="section-icon">business</mat-icon>
              <h2 class="section-title">Site Identity</h2>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Site Name</mat-label>
              <input matInput [(ngModel)]="settings.siteName" name="siteName" placeholder="Your brand name">
              <mat-icon matPrefix>text_fields</mat-icon>
            </mat-form-field>

            <!-- Logo Upload -->
            <div class="logo-upload-area">
              <label class="upload-label">Brand Logo</label>
              <div
                class="upload-zone"
                [class.has-logo]="settings.logoUrl"
                [class.drag-over]="isDragOver"
                (click)="fileInput.click()"
                (dragover)="onDragOver($event)"
                (dragleave)="onDragLeave($event)"
                (drop)="onDrop($event)"
              >
                <input
                  #fileInput
                  type="file"
                  accept="image/*"
                  style="display:none"
                  (change)="onLogoSelected($event)"
                >

                <ng-container *ngIf="!settings.logoUrl">
                  <div class="upload-placeholder">
                    <div class="upload-icon-wrap">
                      <mat-icon class="upload-icon">cloud_upload</mat-icon>
                    </div>
                    <p class="upload-text">Click to upload or drag & drop</p>
                    <p class="upload-hint">PNG, JPG, SVG up to 2MB</p>
                  </div>
                </ng-container>

                <ng-container *ngIf="settings.logoUrl">
                  <div class="logo-preview-wrap">
                    <img [src]="settings.logoUrl" alt="Logo preview" class="logo-preview-img">
                    <div class="logo-overlay">
                      <mat-icon>edit</mat-icon>
                      <span>Change Logo</span>
                    </div>
                  </div>
                </ng-container>
              </div>

              <button
                *ngIf="settings.logoUrl"
                mat-stroked-button
                color="warn"
                class="remove-logo-btn"
                type="button"
                (click)="removeLogo()"
              >
                <mat-icon>delete</mat-icon> Remove Logo
              </button>

              <p *ngIf="uploadError" class="upload-error">{{ uploadError }}</p>
            </div>
          </div>

          <!-- Colors -->
          <div class="section-card">
            <div class="section-header">
              <mat-icon class="section-icon">color_lens</mat-icon>
              <h2 class="section-title">Brand Colors</h2>
            </div>

            <div class="color-grid">
              <div class="color-field-wrap">
                <label class="color-label">Primary Color</label>
                <div class="color-input-row">
                  <div class="color-swatch-btn" [style.background]="settings.primaryColor" (click)="primaryColorInput.click()">
                    <input
                      #primaryColorInput
                      type="color"
                      [(ngModel)]="settings.primaryColor"
                      name="primaryColor"
                      class="hidden-color-input"
                      (input)="onColorChange()"
                    >
                  </div>
                  <mat-form-field appearance="outline" class="color-hex-field">
                    <input
                      matInput
                      [(ngModel)]="settings.primaryColor"
                      name="primaryColorHex"
                      placeholder="#4f46e5"
                      (input)="onColorChange()"
                      maxlength="7"
                    >
                  </mat-form-field>
                </div>
                <div class="color-swatches">
                  <div
                    *ngFor="let color of primaryPresets"
                    class="preset-swatch"
                    [style.background]="color"
                    [class.active]="settings.primaryColor === color"
                    (click)="settings.primaryColor = color; onColorChange()"
                    [matTooltip]="color"
                  ></div>
                </div>
              </div>

              <div class="color-field-wrap">
                <label class="color-label">Accent Color</label>
                <div class="color-input-row">
                  <div class="color-swatch-btn" [style.background]="settings.accentColor" (click)="accentColorInput.click()">
                    <input
                      #accentColorInput
                      type="color"
                      [(ngModel)]="settings.accentColor"
                      name="accentColor"
                      class="hidden-color-input"
                      (input)="onColorChange()"
                    >
                  </div>
                  <mat-form-field appearance="outline" class="color-hex-field">
                    <input
                      matInput
                      [(ngModel)]="settings.accentColor"
                      name="accentColorHex"
                      placeholder="#6c757d"
                      (input)="onColorChange()"
                      maxlength="7"
                    >
                  </mat-form-field>
                </div>
                <div class="color-swatches">
                  <div
                    *ngFor="let color of accentPresets"
                    class="preset-swatch"
                    [style.background]="color"
                    [class.active]="settings.accentColor === color"
                    (click)="settings.accentColor = color; onColorChange()"
                    [matTooltip]="color"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Typography -->
          <div class="section-card">
            <div class="section-header">
              <mat-icon class="section-icon">font_download</mat-icon>
              <h2 class="section-title">Typography</h2>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Font Family</mat-label>
              <mat-select [(ngModel)]="settings.fontFamily" name="fontFamily" (selectionChange)="onColorChange()">
                <mat-option *ngFor="let font of fontOptions" [value]="font.value">
                  <span [style.font-family]="font.value">{{ font.label }}</span>
                </mat-option>
              </mat-select>
              <mat-icon matPrefix>text_format</mat-icon>
            </mat-form-field>

            <div class="font-preview" [style.font-family]="settings.fontFamily">
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>

          <!-- Save Button -->
          <button
            mat-raised-button
            color="primary"
            class="save-btn"
            [disabled]="isSaving"
            (click)="saveSettings()"
          >
            <mat-spinner *ngIf="isSaving" diameter="18" class="btn-spinner"></mat-spinner>
            <mat-icon *ngIf="!isSaving">save</mat-icon>
            {{ isSaving ? 'Saving...' : 'Save & Apply Changes' }}
          </button>
        </div>

        <!-- RIGHT: Live Preview -->
        <div class="preview-panel">
          <div class="preview-header-bar">
            <span class="preview-label">
              <mat-icon>visibility</mat-icon> Live Preview
            </span>
            <span class="preview-badge">Real-time</span>
          </div>

          <!-- Browser Mockup -->
          <div class="browser-mockup">
            <div class="browser-bar">
              <div class="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-url">localhost:4200</div>
            </div>

            <!-- Navbar Preview -->
            <div class="preview-navbar" [style.background-color]="settings.primaryColor">
              <div class="preview-brand">
                <img *ngIf="settings.logoUrl" [src]="settings.logoUrl" class="preview-logo" alt="logo">
                <div *ngIf="!settings.logoUrl" class="preview-logo-placeholder">
                  <mat-icon style="color:white;font-size:18px">image</mat-icon>
                </div>
                <span class="preview-site-name" [style.font-family]="settings.fontFamily">
                  {{ settings.siteName || 'Your Site' }}
                </span>
              </div>
              <div class="preview-nav-links" [style.font-family]="settings.fontFamily">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>

            <!-- Content Preview -->
            <div class="preview-content" [style.font-family]="settings.fontFamily">
              <div class="preview-hero">
                <h2 class="preview-heading" [style.color]="settings.primaryColor">
                  Welcome to {{ settings.siteName || 'Your Site' }}
                </h2>
                <p class="preview-body">This is how your brand will look across the platform. Every color, font, and logo choice is reflected here instantly.</p>
                <div class="preview-buttons">
                  <button class="preview-btn-primary" [style.background-color]="settings.primaryColor">
                    Get Started
                  </button>
                  <button class="preview-btn-accent" [style.background-color]="settings.accentColor">
                    Learn More
                  </button>
                </div>
              </div>

              <div class="preview-cards">
                <div class="preview-card" *ngFor="let card of previewCards">
                  <div class="preview-card-icon" [style.background-color]="settings.primaryColor + '20'" [style.color]="settings.primaryColor">
                    <mat-icon>{{ card.icon }}</mat-icon>
                  </div>
                  <div class="preview-card-title" [style.font-family]="settings.fontFamily">{{ card.title }}</div>
                  <div class="preview-card-text">{{ card.text }}</div>
                </div>
              </div>

              <!-- Badge previews -->
              <div class="preview-badges">
                <span class="preview-badge-item" [style.background-color]="settings.primaryColor + '20'" [style.color]="settings.primaryColor">Primary</span>
                <span class="preview-badge-item" [style.background-color]="settings.accentColor + '20'" [style.color]="settings.accentColor">Accent</span>
                <span class="preview-badge-item" style="background:#f0fdf4;color:#16a34a">Success</span>
                <span class="preview-badge-item" style="background:#fef2f2;color:#dc2626">Danger</span>
              </div>
            </div>
          </div>

          <!-- Color Summary -->
          <div class="color-summary">
            <div class="color-chip" [style.background]="settings.primaryColor">
              <span>Primary</span>
              <span>{{ settings.primaryColor }}</span>
            </div>
            <div class="color-chip" [style.background]="settings.accentColor">
              <span>Accent</span>
              <span>{{ settings.accentColor }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .theme-builder-wrapper {
      padding: 24px;
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Header */
    .page-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }
    .header-icon {
      width: 52px;
      height: 52px;
      background: linear-gradient(135deg, #4f46e5, #818cf8);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .header-icon mat-icon { font-size: 28px; width: 28px; height: 28px; }
    .page-title { font-size: 1.75rem; font-weight: 700; margin: 0; color: #111827; }
    .page-subtitle { margin: 4px 0 0; color: #6b7280; font-size: 0.9rem; }

    /* Layout */
    .theme-layout {
      display: grid;
      grid-template-columns: 480px 1fr;
      gap: 24px;
      align-items: start;
    }

    /* Section Cards */
    .section-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
      border: 1px solid #f3f4f6;
    }
    .section-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .section-icon { color: #4f46e5; }
    .section-title { font-size: 1rem; font-weight: 600; margin: 0; color: #1f2937; }
    .full-width { width: 100%; }

    /* Logo Upload */
    .logo-upload-area { margin-top: 8px; }
    .upload-label {
      display: block;
      font-size: 0.8rem;
      font-weight: 500;
      color: #374151;
      margin-bottom: 8px;
    }
    .upload-zone {
      border: 2px dashed #d1d5db;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
      overflow: hidden;
      background: #fafafa;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .upload-zone:hover, .upload-zone.drag-over {
      border-color: #4f46e5;
      background: #eef2ff;
    }
    .upload-placeholder {
      text-align: center;
      padding: 24px;
    }
    .upload-icon-wrap {
      width: 48px; height: 48px;
      background: #e0e7ff;
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 12px;
    }
    .upload-icon { color: #4f46e5; font-size: 24px; }
    .upload-text { font-size: 0.875rem; font-weight: 500; color: #374151; margin: 0 0 4px; }
    .upload-hint { font-size: 0.75rem; color: #9ca3af; margin: 0; }
    .logo-preview-wrap { position: relative; width: 100%; }
    .logo-preview-img {
      display: block;
      max-height: 120px;
      max-width: 100%;
      margin: 0 auto;
      padding: 16px;
      object-fit: contain;
    }
    .logo-overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      color: white; opacity: 0;
      transition: opacity 0.2s;
      gap: 4px;
      font-size: 0.85rem;
    }
    .upload-zone:hover .logo-overlay { opacity: 1; }
    .remove-logo-btn { margin-top: 8px; width: 100%; }
    .upload-error { color: #dc2626; font-size: 0.8rem; margin-top: 6px; }

    /* Colors */
    .color-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .color-label {
      display: block;
      font-size: 0.8rem;
      font-weight: 500;
      color: #374151;
      margin-bottom: 8px;
    }
    .color-input-row { display: flex; gap: 10px; align-items: center; margin-bottom: 12px; }
    .color-swatch-btn {
      width: 44px; height: 44px;
      border-radius: 10px;
      cursor: pointer;
      border: 3px solid white;
      box-shadow: 0 0 0 1px #d1d5db;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
      transition: transform 0.15s;
    }
    .color-swatch-btn:hover { transform: scale(1.05); }
    .hidden-color-input {
      position: absolute; inset: 0;
      opacity: 0; cursor: pointer;
      width: 100%; height: 100%;
    }
    .color-hex-field { flex: 1; }
    .color-swatches { display: flex; gap: 6px; flex-wrap: wrap; }
    .preset-swatch {
      width: 22px; height: 22px;
      border-radius: 6px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: transform 0.15s, border-color 0.15s;
    }
    .preset-swatch:hover { transform: scale(1.2); }
    .preset-swatch.active { border-color: #1f2937; transform: scale(1.15); }

    /* Font */
    .font-preview {
      margin-top: 12px;
      padding: 12px 16px;
      background: #f9fafb;
      border-radius: 8px;
      font-size: 0.95rem;
      color: #374151;
      border: 1px solid #e5e7eb;
      transition: font-family 0.2s;
    }

    /* Save Button */
    .save-btn {
      width: 100%;
      height: 48px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 12px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .btn-spinner { display: inline-block; }

    /* Preview Panel */
    .preview-panel {
      position: sticky;
      top: 24px;
    }
    .preview-header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .preview-label {
      display: flex; align-items: center; gap: 6px;
      font-weight: 600; color: #374151; font-size: 0.95rem;
    }
    .preview-label mat-icon { font-size: 18px; color: #6b7280; }
    .preview-badge {
      background: #dcfce7; color: #16a34a;
      font-size: 0.7rem; font-weight: 600;
      padding: 2px 10px; border-radius: 20px;
      letter-spacing: 0.05em;
    }

    /* Browser Mockup */
    .browser-mockup {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06);
      background: white;
    }
    .browser-bar {
      background: #f3f4f6;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #e5e7eb;
    }
    .browser-dots { display: flex; gap: 6px; }
    .browser-dots span {
      width: 10px; height: 10px; border-radius: 50%;
    }
    .browser-dots span:nth-child(1) { background: #fc5753; }
    .browser-dots span:nth-child(2) { background: #fdbc40; }
    .browser-dots span:nth-child(3) { background: #33c748; }
    .browser-url {
      flex: 1; background: white;
      border-radius: 6px; padding: 4px 12px;
      font-size: 0.75rem; color: #6b7280;
      border: 1px solid #e5e7eb;
    }

    /* Navbar Preview */
    .preview-navbar {
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background-color 0.3s;
    }
    .preview-brand { display: flex; align-items: center; gap: 10px; }
    .preview-logo { height: 28px; width: auto; object-fit: contain; }
    .preview-logo-placeholder {
      width: 28px; height: 28px;
      background: rgba(255,255,255,0.2);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
    }
    .preview-site-name { color: white; font-weight: 700; font-size: 1rem; }
    .preview-nav-links { display: flex; gap: 16px; }
    .preview-nav-links span { color: rgba(255,255,255,0.85); font-size: 0.8rem; cursor: pointer; }

    /* Content Preview */
    .preview-content { padding: 20px; }
    .preview-hero { margin-bottom: 20px; }
    .preview-heading {
      font-size: 1.25rem; font-weight: 700;
      margin: 0 0 8px;
      transition: color 0.3s;
    }
    .preview-body { font-size: 0.82rem; color: #6b7280; margin: 0 0 16px; line-height: 1.6; }
    .preview-buttons { display: flex; gap: 10px; }
    .preview-btn-primary, .preview-btn-accent {
      padding: 8px 16px;
      border: none; border-radius: 8px;
      color: white; font-size: 0.8rem; font-weight: 600;
      cursor: pointer; transition: opacity 0.2s;
    }
    .preview-btn-primary:hover, .preview-btn-accent:hover { opacity: 0.85; }

    /* Preview Cards */
    .preview-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
    .preview-card {
      background: #f9fafb;
      border-radius: 10px;
      padding: 12px;
      border: 1px solid #f3f4f6;
    }
    .preview-card-icon {
      width: 32px; height: 32px;
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 8px;
      transition: background-color 0.3s, color 0.3s;
    }
    .preview-card-icon mat-icon { font-size: 16px; width: 16px; height: 16px; }
    .preview-card-title { font-size: 0.78rem; font-weight: 600; color: #111827; margin-bottom: 4px; }
    .preview-card-text { font-size: 0.7rem; color: #9ca3af; }

    /* Badges */
    .preview-badges { display: flex; gap: 8px; flex-wrap: wrap; }
    .preview-badge-item {
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 600;
      transition: background-color 0.3s, color 0.3s;
    }

    /* Color Summary */
    .color-summary { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
    .color-chip {
      border-radius: 10px;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: white;
      font-size: 0.78rem;
      transition: background 0.3s;
    }
    .color-chip span:first-child { font-weight: 600; opacity: 0.9; }
    .color-chip span:last-child { opacity: 0.75; font-size: 0.72rem; }

    @media (max-width: 1024px) {
      .theme-layout { grid-template-columns: 1fr; }
      .preview-panel { position: static; }
    }
    @media (max-width: 600px) {
      .color-grid { grid-template-columns: 1fr; }
      .preview-cards { grid-template-columns: 1fr 1fr; }
    }
  `]
})
export class ThemeSettingsComponent implements OnInit {
  settings: ThemeSettings = {
    primaryColor: '#4f46e5',
    accentColor: '#6c757d',
    logoUrl: '',
    fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
    siteName: 'LumiNex'
  };

  isSaving = false;
  isDragOver = false;
  uploadError = '';

  primaryPresets = ['#4f46e5', '#2563eb', '#0891b2', '#059669', '#dc2626', '#9333ea', '#f59e0b', '#111827'];
  accentPresets = ['#6c757d', '#64748b', '#374151', '#f97316', '#ec4899', '#14b8a6', '#84cc16', '#a855f7'];

  fontOptions = [
    { label: 'Roboto', value: 'Roboto, "Helvetica Neue", sans-serif' },
    { label: 'Inter', value: 'Inter, sans-serif' },
    { label: 'Poppins', value: 'Poppins, sans-serif' },
    { label: 'Lato', value: 'Lato, sans-serif' },
    { label: 'Montserrat', value: 'Montserrat, sans-serif' },
    { label: 'Open Sans', value: '"Open Sans", sans-serif' },
    { label: 'Nunito', value: 'Nunito, sans-serif' },
    { label: 'Raleway', value: 'Raleway, sans-serif' },
    { label: 'Playfair Display', value: '"Playfair Display", serif' },
    { label: 'Source Sans Pro', value: '"Source Sans Pro", sans-serif' },
  ];

  previewCards = [
    { icon: 'rocket_launch', title: 'Performance', text: 'Fast & reliable' },
    { icon: 'shield', title: 'Security', text: 'Enterprise grade' },
    { icon: 'bar_chart', title: 'Analytics', text: 'Deep insights' },
  ];

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

  onLogoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.processLogoFile(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    const file = event.dataTransfer?.files?.[0];
    if (file) this.processLogoFile(file);
  }

  processLogoFile(file: File) {
    this.uploadError = '';

    if (!file.type.startsWith('image/')) {
      this.uploadError = 'Please upload an image file (PNG, JPG, SVG).';
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      this.uploadError = 'Image must be under 2MB.';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.settings.logoUrl = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  removeLogo() {
    this.settings.logoUrl = '';
    this.uploadError = '';
  }

  onColorChange() {
    // Live preview updates automatically via ngModel binding
  }

  saveSettings() {
    this.isSaving = true;
    this.themeService.updateThemeSettings(this.settings).subscribe({
      next: () => {
        this.isSaving = false;
        this.snackBar.open('✓ Theme saved and applied!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Failed to update theme', err);
        this.snackBar.open('Failed to save theme settings', 'Close', {
          duration: 3000
        });
      }
    });
  }
}