import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';

export interface ChatMessage {
  id: string;
  clientId?: string;
  clientName?: string;
  employeeId?: string;
  employeeName?: string;
  message: string;
  timestamp: string;
  type: 'client' | 'employee' | 'system';
}

export interface ChatUser {
  id: string | number;
  name: string;
  role: 'client' | 'employee' | 'admin';
  online: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  private onlineClientsSubject = new BehaviorSubject<ChatUser[]>([]);
  private onlineEmployeesSubject = new BehaviorSubject<ChatUser[]>([]);
  private currentUserSubject = new BehaviorSubject<ChatUser | null>(null);
  
  messages$ = this.messagesSubject.asObservable();
  onlineClients$ = this.onlineClientsSubject.asObservable();
  onlineEmployees$ = this.onlineEmployeesSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initialize Socket.io client
    this.socket = io('http://localhost:4000', {
      withCredentials: true
    });

    this.setupSocketListeners();
  }

  private setupSocketListeners(): void {
    // Connection status
    this.socket.on('connect', () => {
      console.log('Connected to chat server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from chat server');
    });

    // Messages
    this.socket.on('new-message', (message: ChatMessage) => {
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, message]);
    });

    // User presence
    this.socket.on('client-joined', ({ clientId, clientName }: { clientId: string; clientName: string }) => {
      this.updateOnlineClients();
    });

    this.socket.on('employee-joined', ({ employeeId, employeeName }: { employeeId: string; employeeName: string }) => {
      this.updateOnlineEmployees();
    });

    this.socket.on('client-left', ({ clientId }: { clientId: string }) => {
      this.updateOnlineClients();
    });

    this.socket.on('employee-left', ({ employeeId }: { employeeId: string }) => {
      this.updateOnlineEmployees();
    });

    // Typing indicators
    this.socket.on('client-typing', ({ clientId }: { clientId: string }) => {
      this.handleTyping('client', clientId);
    });

    this.socket.on('employee-typing', ({ employeeId }: { employeeId: string }) => {
      this.handleTyping('employee', employeeId);
    });
  }

  authenticateUser(user: ChatUser): void {
    this.currentUserSubject.next(user);
    
    if (user.role === 'client') {
      this.socket.emit('authenticate-client', {
        clientId: user.id,
        clientName: user.name
      });
    } else if (user.role === 'employee' || user.role === 'admin') {
      this.socket.emit('authenticate-employee', {
        employeeId: user.id,
        employeeName: user.name
      });
    }
  }

  sendMessage(message: string, targetUserId?: string): void {
    if (!message.trim() || !this.socket.connected) return;

    const currentUser = this.currentUserSubject.value;
    if (!currentUser) return;

    const messageData = {
      message,
      timestamp: new Date().toISOString()
    };

    if (currentUser.role === 'client') {
      this.socket.emit('client-message', messageData);
    } else if (currentUser.role === 'employee' || currentUser.role === 'admin') {
      this.socket.emit('employee-message', {
        ...messageData,
        clientId: targetUserId
      });
    }
  }

  sendTypingIndicator(): void {
    const currentUser = this.currentUserSubject.value;
    if (!currentUser) return;

    if (currentUser.role === 'client') {
      this.socket.emit('client-typing', {});
    } else if (currentUser.role === 'employee' || currentUser.role === 'admin') {
      this.socket.emit('employee-typing', {});
    }
  }

  private handleTyping(role: 'client' | 'employee', userId: string): void {
    // Handle typing indicators (you can implement this in your component)
    console.log(`${role} ${userId} is typing...`);
  }

  private updateOnlineClients(): void {
    this.http.get<ChatUser[]>('http://localhost:4000/api/chat/online-clients').subscribe(clients => {
      this.onlineClientsSubject.next(clients);
    });
  }

  private updateOnlineEmployees(): void {
    this.http.get<ChatUser[]>('http://localhost:4000/api/chat/online-employees').subscribe(employees => {
      this.onlineEmployeesSubject.next(employees);
    });
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
