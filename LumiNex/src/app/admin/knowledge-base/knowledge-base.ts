import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KnowledgeBaseService, KnowledgeArticle } from '../../../core/services/knowledge-base.service';

@Component({
  selector: 'app-admin-knowledge-base',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-dark mb-0">Knowledge Base</h2>
          <p class="text-muted">Manage internal SOPs and guides for employees.</p>
        </div>
        <button class="btn btn-primary rounded-pill px-4" (click)="openAddModal()">
          <i class="bi bi-plus-lg me-2"></i> Create Article
        </button>
      </div>

      <div class="row g-4">
        <div class="col-md-4" *ngFor="let article of articles">
          <div class="card border-0 shadow-sm rounded-4 h-100">
            <div class="card-body p-4 d-flex flex-column">
              <span class="badge bg-light text-primary mb-2 align-self-start">{{ article.category }}</span>
              <h5 class="fw-bold mb-3">{{ article.title }}</h5>
              <p class="text-muted small text-truncate" style="max-height: 40px;">{{ article.content }}</p>
              
              <div class="mt-auto d-flex justify-content-between align-items-center pt-3 border-top">
                <span class="text-muted small">Updated: {{ article.updatedAt | date:'shortDate' }}</span>
                <div>
                  <button class="btn btn-sm btn-light text-primary me-2 rounded-circle" (click)="openEditModal(article)">
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button class="btn btn-sm btn-light text-danger rounded-circle" (click)="deleteArticle(article)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-center py-5" *ngIf="articles.length === 0">
          <h5 class="text-muted">No articles found. Create one to get started!</h5>
        </div>
      </div>

      <!-- Add/Edit Modal -->
      <div class="modal-backdrop fade show" *ngIf="showModal" (click)="closeModal()"></div>
      <div class="modal fade show d-block" *ngIf="showModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden">
            <div class="modal-header border-0 bg-primary text-white p-4">
              <h5 class="modal-title fw-bold">{{ isEditing ? 'Edit Article' : 'Create Article' }}</h5>
              <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>
            </div>
            <div class="modal-body p-4 p-md-5">
              <form (ngSubmit)="saveArticle()" #articleForm="ngForm">
                <div class="row g-3">
                  <div class="col-md-8">
                    <label class="form-label small fw-bold text-muted">Title</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="title" [(ngModel)]="activeArticle.title" required>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold text-muted">Category</label>
                    <input type="text" class="form-control bg-light border-0 py-2 rounded-3" name="category" [(ngModel)]="activeArticle.category" placeholder="e.g. Technical, Billing" required>
                  </div>
                  <div class="col-12">
                    <label class="form-label small fw-bold text-muted">Content</label>
                    <textarea class="form-control bg-light border-0 py-3 rounded-3" name="content" [(ngModel)]="activeArticle.content" rows="10" required placeholder="Write the guide here..."></textarea>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-top d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-light rounded-pill px-4 py-2 fw-bold" (click)="closeModal()">Cancel</button>
                  <button type="submit" class="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow-sm" [disabled]="!articleForm.form.valid">
                    Save Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminKnowledgeBaseComponent implements OnInit {
  articles: KnowledgeArticle[] = [];
  showModal = false;
  isEditing = false;
  activeArticle: Partial<KnowledgeArticle> = {};

  constructor(private kbService: KnowledgeBaseService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.kbService.getArticles().subscribe(data => this.articles = data);
  }

  openAddModal() {
    this.activeArticle = { title: '', content: '', category: '' };
    this.isEditing = false;
    this.showModal = true;
  }

  openEditModal(article: KnowledgeArticle) {
    this.activeArticle = { ...article };
    this.isEditing = true;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveArticle() {
    if (this.isEditing && this.activeArticle.id) {
      this.kbService.updateArticle(this.activeArticle.id, this.activeArticle as KnowledgeArticle).subscribe(() => {
        this.loadArticles();
        this.closeModal();
      });
    } else {
      this.kbService.createArticle(this.activeArticle as KnowledgeArticle).subscribe(() => {
        this.loadArticles();
        this.closeModal();
      });
    }
  }

  deleteArticle(article: KnowledgeArticle) {
    if (confirm('Delete this article?')) {
      this.kbService.deleteArticle(article.id!).subscribe(() => this.loadArticles());
    }
  }
}
