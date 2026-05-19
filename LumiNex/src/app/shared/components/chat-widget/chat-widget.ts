import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ChatService, ChatMessage, ChatUser } from '../../../core/services/chat.service';
import { User } from '../../../core/models/user';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  template: `
    <div class="chat-widget" *ngIf="isOpen && currentUser?.role === 'CLIENT'">
      <!-- Chat Header -->
      <div class="chat-header">
        <div class="chat-title">
          <i class="bi bi-chat-left-text-fill"></i>
          <span>Support Chat</span>
          <div class="online-indicator" *ngIf="isOnline"></div>
        </div>
        <div class="chat-actions">
          <button class="btn btn-sm btn-link py-0 px-1 text-white border-0" (click)="closeChat()" title="Close Chat">
            <i class="bi bi-x-lg" style="font-size: 1.1rem; vertical-align: middle;"></i>
          </button>
        </div>
      </div>

      <!-- Chat Body -->
      <div class="chat-body">
        <!-- Messages Container -->
        <div class="messages-container" #messagesContainer>
          <div class="message" *ngFor="let message of messages" [class.client-message]="message.type === 'client'" [class.employee-message]="message.type === 'employee'">
            <div class="message-header">
              <span class="sender-name">{{ getSenderName(message) }}</span>
              <span class="message-time">{{ formatTime(message.timestamp) }}</span>
            </div>
            <div class="message-content">{{ message.message }}</div>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div class="typing-indicator" *ngIf="isTyping">
          <span class="typing-text">{{ typingUser }} is typing...</span>
        </div>

        <!-- Input Area -->
        <div class="chat-input">
          <div class="input-group">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Type your message..."
              [(ngModel)]="newMessage"
              (keydown.enter)="sendMessage()"
              (input)="onTyping()"
              (focus)="isTyping = false"
              #messageInput
            >
            <button class="btn btn-primary d-flex align-items-center justify-content-center" (click)="sendMessage()" [disabled]="!newMessage.trim()">
              <i class="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .chat-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }

    .chat-widget.minimized {
      height: 60px;
      width: 250px;
    }

    .chat-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 16px;
      border-radius: 10px 10px 0 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .chat-title span {
      font-weight: 600;
    }

    .online-indicator {
      width: 8px;
      height: 8px;
      background: #4ade80;
      border-radius: 50%;
      margin-left: 8px;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    .chat-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-height: calc(100% - 60px);
    }

    .messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: #f8f9fa;
    }

    .message {
      margin-bottom: 12px;
      padding: 8px 12px;
      border-radius: 12px;
      max-width: 80%;
    }

    .client-message {
      background: #e3f2fd;
      margin-left: auto;
      border-bottom-right-radius: 4px;
    }

    .employee-message {
      background: #f1f3f4;
      margin-right: auto;
      border-bottom-left-radius: 4px;
    }

    .message-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #666;
      margin-bottom: 4px;
    }

    .message-content {
      word-wrap: break-word;
    }

    .typing-indicator {
      padding: 8px 16px;
      color: #666;
      font-style: italic;
      font-size: 0.9rem;
    }

    .chat-input {
      padding: 16px;
      border-top: 1px solid #e0e0e0;
    }

    .input-group {
      display: flex;
      gap: 8px;
    }

    .input-group input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 8px 16px;
      outline: none;
    }

    .input-group input:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
    }

    .btn {
      border-radius: 20px;
      padding: 8px 16px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: #667eea;
      color: white;
    }

    .btn-primary:hover {
      background: #5a6fd8;
    }

    .btn-primary:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .btn-link {
      color: white;
      padding: 4px;
    }

    .btn-link:hover {
      color: rgba(255, 255, 255, 0.8);
    }
    `
  ]
})
export class ChatWidgetComponent implements OnInit, OnDestroy {
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.closeChat();
  }

  messages: ChatMessage[] = [];
  newMessage: string = '';
  isMinimized: boolean = false;
  isOpen: boolean = false;
  isOnline: boolean = false;
  isTyping: boolean = false;
  typingUser: string = '';
  typingTimeout: any;
  currentUser: User | null = null;
  
  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    // Get current user from auth service
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User | null) => {
        this.currentUser = user;
        if (user) {
          // Authenticate with chat service
          this.chatService.authenticateUser({
            id: user.id,
            name: user.name || (user.role === 'CLIENT' ? 'Client' : 'Support Agent'),
            role: user.role.toLowerCase() as 'client' | 'employee' | 'admin',
            online: true
          });
        }
      });

    // Listen for messages
    this.chatService.messages$
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages: ChatMessage[]) => {
        this.messages = messages;
        this.scrollToBottom();
      });

    // Listen for online status
    this.chatService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: ChatUser | null) => {
        this.isOnline = !!user;
      });

    // Listen for open/close state of the chat window
    this.chatService.chatOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe((open: boolean) => {
        this.isOpen = open;
        if (open) {
          this.isMinimized = false;
          setTimeout(() => {
            this.scrollToBottom();
            const input = document.querySelector('.input-group input') as HTMLInputElement;
            if (input) input.focus();
          }, 100);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  closeChat(): void {
    this.chatService.toggleChat(false);
  }

  toggleMinimize(): void {
    this.isMinimized = !this.isMinimized;
    if (!this.isMinimized) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
      this.isTyping = false;
      this.typingUser = '';
    }
  }

  onTyping(): void {
    if (this.newMessage.trim()) {
      this.showTypingIndicator();
      this.chatService.sendTypingIndicator();
    }
  }

  showTypingIndicator(): void {
    this.isTyping = true;
    this.typingUser = this.currentUser?.role === 'CLIENT' ? 'Client' : 'Support Agent';
    
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    
    this.typingTimeout = setTimeout(() => {
      this.isTyping = false;
      this.typingUser = '';
    }, 3000);
  }

  getSenderName(message: ChatMessage): string {
    if (message.type === 'client') {
      return message.clientName || 'Client';
    } else if (message.type === 'employee') {
      return message.employeeName || 'Support Agent';
    }
    return 'System';
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const container = document.querySelector('.messages-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 100);
  }

  formatTime(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
