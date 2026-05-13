import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KnowledgeBaseService, KnowledgeArticle } from '../../../core/services/knowledge-base.service';

@Component({
  selector: 'app-employee-knowledge-base',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="mb-4">
        <h2 class="fw-bold text-dark mb-0">Knowledge Base</h2>
        <p class="text-muted">Internal guides and SOPs to help you resolve client issues faster.</p>
      </div>

      <!-- Search -->
      <div class="mb-4">
        <div class="input-group shadow-sm" style="max-width: 400px;">
          <span class="input-group-text bg-white border-end-0"><i class="bi bi-search text-muted"></i></span>
          <input type="text" class="form-control border-start-0 bg-white" placeholder="Search articles..."
                 [(ngModel)]="searchTerm" (input)="filterArticles()">
        </div>
      </div>

      <!-- Reading View -->
      <div *ngIf="!selectedArticle">
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let article of filteredArticles">
            <div class="card border-0 shadow-sm rounded-4 h-100 hover-card" (click)="selectArticle(article)" style="cursor:pointer;">
              <div class="card-body p-4 d-flex flex-column">
                <span class="badge bg-primary bg-opacity-10 text-primary mb-2 align-self-start rounded-pill">{{ article.category }}</span>
                <h5 class="fw-bold mb-2">{{ article.title }}</h5>
                <p class="text-muted small flex-grow-1">{{ article.content | slice:0:100 }}...</p>
                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                  <span class="text-muted small">{{ article.updatedAt | date:'shortDate' }}</span>
                  <span class="text-primary small fw-bold">Read More <i class="bi bi-chevron-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 text-center py-5" *ngIf="filteredArticles.length === 0">
            <i class="bi bi-search display-4 text-muted d-block mb-3"></i>
            <h5 class="text-muted">No articles found for "{{ searchTerm }}"</h5>
          </div>
        </div>
      </div>

      <!-- Article Detail View -->
      <div *ngIf="selectedArticle" class="card border-0 shadow-sm rounded-4">
        <div class="card-body p-5">
          <button class="btn btn-link text-muted p-0 mb-4 text-decoration-none fw-bold" (click)="selectedArticle = null">
            <i class="bi bi-arrow-left me-2"></i> Back to Knowledge Base
          </button>
          <span class="badge bg-primary bg-opacity-10 text-primary mb-3 rounded-pill">{{ selectedArticle.category }}</span>
          <h2 class="fw-bold mb-2">{{ selectedArticle.title }}</h2>
          <p class="text-muted small mb-5">Last updated: {{ selectedArticle.updatedAt | date:'medium' }}</p>
          <hr class="mb-4">
          <div class="article-content" style="white-space: pre-wrap; line-height: 1.8; color: #444;">{{ selectedArticle.content }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`.hover-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1) !important; transition: all 0.2s; }`]
})
export class EmployeeKnowledgeBaseComponent implements OnInit {
  articles: KnowledgeArticle[] = [];
  filteredArticles: KnowledgeArticle[] = [];
  selectedArticle: KnowledgeArticle | null = null;
  searchTerm = '';

  constructor(private kbService: KnowledgeBaseService) {}

  ngOnInit() {
    this.kbService.getArticles().subscribe(data => {
      this.articles = data;
      this.filteredArticles = data;
    });
  }

  filterArticles() {
    const term = this.searchTerm.toLowerCase();
    this.filteredArticles = this.articles.filter(a =>
      a.title.toLowerCase().includes(term) ||
      a.content.toLowerCase().includes(term) ||
      a.category.toLowerCase().includes(term)
    );
  }

  selectArticle(article: KnowledgeArticle) {
    this.selectedArticle = article;
  }
}
