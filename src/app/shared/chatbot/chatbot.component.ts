import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  chatOpen = false;
  userInput = '';
  messages: { text: string; fromUser: boolean }[] = [
    { text: "Hello! How can I assist you with Renter's Insurance?", fromUser: false }
  ];

  @ViewChild('chatMessages', { static: false }) chatMessages!: ElementRef;

  toggleChat() {
    this.chatOpen = !this.chatOpen;
    setTimeout(() => this.scrollToBottom(), 100); // Scroll down when opening chat
  }

  sendMessage() {
    if (!this.userInput.trim()) return; // ✅ Prevent empty messages

    this.messages.push({ text: this.userInput, fromUser: true });
    this.userInput = ''; // ✅ Clear input field after sending

    setTimeout(() => {
      this.autoReply();
      this.scrollToBottom(); // ✅ Scroll down when new message appears
    }, 1000);
  }

  autoReply() {
    let lastMessage = this.messages[this.messages.length - 1].text.toLowerCase().trim();
    let reply = "I'm sorry, I didn't understand that.";

    if (lastMessage.includes("quote")) {
      reply = "You can get a new insurance quote by clicking 'Get a Quote'!";
    } else if (lastMessage.includes("coverage")) {
      reply = "We offer comprehensive coverage including fire, theft, and more!";
    } else if (lastMessage.includes("claim")) {
      reply = "To file a claim, visit your dashboard and click 'Submit Claim'.";
    } else if (lastMessage.includes("price") || lastMessage.includes("cost")) {
      reply = "Our plans start at just $20 per month. Want a detailed quote?";
    } else if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
      reply = "Hello! How can I assist you today?";
    }

    this.messages.push({ text: reply, fromUser: false });
    setTimeout(() => this.scrollToBottom(), 100); // ✅ Ensure response is visible
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.chatMessages) {
        this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
