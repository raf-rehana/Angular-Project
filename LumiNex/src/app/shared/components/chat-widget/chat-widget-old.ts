import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.services';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-widget" [class.minimized]="isMinimized">
      <!-- Chat Header -->
      <div class="chat-header" (click)="toggleMinimize()">
        <div class="chat-title">
          <i class="bi bi-chat-dots-fill"></i>
          <span>Live Support</span>
          <div class="online-indicator" *ngIf="isOnline"></div>
        </div>
        <div class="chat-actions">
          <button class="btn btn-sm btn-link" (click)="toggleMinimize()">
            <i class="bi bi-chevron-{{ isMinimized ? 'right' : 'down' }}"></i>
          </button>
        </div>
      </div>

      <!-- Chat Body -->
      <div class="chat-body" *ngIf="!isMinimized">
        <!-- Messages Container -->
        <div class="messages-container" #messagesContainer>
          <div class="message" *ngFor="let message of messages" [class.client-message]="message.type === 'client'" [class.employee-message]="message.type === 'employee'">
            <div class="message-header">
              <span class="sender-name">{{ message.type === 'client' ? message.clientName : message.employeeName }}</span>
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
              (focus)="showTyping = false"
              #messageInput
            >
            <button class="btn btn-primary" (click)="sendMessage()" [disabled]="!newMessage.trim()">
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
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isMinimized = true;
    }
  }

  socket: Socket;
  messages: any[] = [];
  newMessage: string = '';
  isMinimized: boolean = true;
  isOnline: boolean = false;
  isTyping: boolean = false;
  typingUser: string = '';
  typingTimeout: any;
  currentUser: any;
  
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {
    // Initialize Socket.io client
    this.socket = io('http://localhost:4000', {
      withCredentials: true
    });

    // Listen for connection
    this.socket.on('connect', () => {
      console.log('Connected to chat server');
      this.authenticateUser();
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from chat server');
      this.isOnline = false;
    });
  }

  ngOnInit(): void {
    // Listen for new messages
    this.socket.on('new-message', (messageData) => {
      this.messages.push(messageData);
      this.scrollToBottom();
      this.isTyping = false;
      this.typingUser = '';
    });

    // Listen for typing indicators
    this.socket.on('client-typing', ({ clientId }) => {
      if (this.currentUser?.role === 'employee') {
        this.showTypingIndicator('Client');
      }
    });

    this.socket.on('employee-typing', ({ employeeId }) => {
      if (this.currentUser?.role === 'client') {
        this.showTypingIndicator('Employee');
      }
    });

    // Listen for user presence
    this.socket.on('client-joined', ({ clientId, clientName }) => {
      if (this.currentUser?.role === 'employee') {
        this.addSystemMessage(`${clientName} joined the chat`);
      }
      this.isOnline = true;
    });

    this.socket.on('employee-joined', ({ employeeId, employeeName }) => {
      if (this.currentUser?.role === 'client') {
        this.addSystemMessage(`${employeeName} joined the chat`);
      }
      this.isOnline = true;
    });

    this.socket.on('client-left', ({ clientId }) => {
      if (this.currentUser?.role === 'employee') {
        this.addSystemMessage('Client left the chat');
      }
    });

    this.socket.on('employee-left', ({ employeeId }) => {
      if (this.currentUser?.role === 'client') {
        this.addSystemMessage('Support agent left the chat');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  authenticateUser(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      
      if (user) {
        if (user.role === 'client') {
          this.socket.emit('authenticate-client', {
            clientId: user.id,
            clientName: user.name || 'Client'
          });
        } else if (user.role === 'employee' || user.role === 'admin') {
          this.socket.emit('authenticate-employee', {
            employeeId: user.id,
            employeeName: user.name || 'Support Agent'
          });
        }
      }
    });
  }

  toggleMinimize(): void {
    this.isMinimized = !this.isMinimized;
    if (!this.isMinimized) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim() && this.socket.connected) {
      if (this.currentUser?.role === 'client') {
        // Send to all employees
        this.socket.emit('client-message', {
          message: this.newMessage,
          timestamp: new Date().toISOString()
        });
      } else if (this.currentUser?.role === 'employee' || user.role === 'admin') {
        // For employees, we need a way to specify which client to respond to
        // For now, broadcast to all clients
        this.socket.emit('employee-message', {
          message: this.newMessage,
          timestamp: new Date().toISOString()
        });
      }

      this.messages.push({
        message: this.newMessage,
        timestamp: new Date().toISOString(),
        type: this.currentUser?.role === 'client' ? 'client' : 'employee',
        clientName: this.currentUser?.name || (this.currentUser?.role === 'client' ? 'Client' : 'Support Agent'),
        employeeName: this.currentUser?.name || (this.currentUser?.role === 'employee' ? 'Support Agent' : 'Client')
      });

      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  onTyping(): void {
    if (this.newMessage.trim()) {
      this.showTypingIndicator();
      this.emitTyping();
    }
  }

  showTypingIndicator(userType?: string): void {
    this.isTyping = true;
    this.typingUser = userType || (this.currentUser?.role === 'client' ? 'Client' : 'Support Agent');
    
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    
    this.typingTimeout = setTimeout(() => {
      this.isTyping = false;
      this.typingUser = '';
    }, 3000);
  }

  emitTyping(): void {
    if (this.currentUser?.role === 'client') {
      this.socket.emit('client-typing', {});
    } else if (this.currentUser?.role === 'employee' || this.currentUser?.role === 'admin') {
      this.socket.emit('employee-typing', {});
    }
  }

  addSystemMessage(message: string): void {
    this.messages.push({
      message: message,
      timestamp: new Date().toISOString(),
      type: 'system'
    });
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