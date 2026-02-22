import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  /* private generativeAI: GoogleGenerativeAI;

  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyDwdQD_xBGQ0nxj-ZV53QPy0WXPNSpMxNQ');
  }

  async generateTextOld(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });
    this.messageHistory.next({
      from: 'user',
      message: prompt
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next({
      from: 'bot',
      message: text
    })
  }

  async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });

    this.messageHistory.next({
      from: 'user',
      message: prompt
    });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    });

    const response = await result.response;
    const text = response.text();

    console.log(text);

    this.messageHistory.next({
      from: 'bot',
      message: text
    });
  }

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  } */

    private generativeAI: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyCii8eqomqkkhirJidPxeh_jQ51GqFuRys'); // Replace with your actual key
  }

  async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });
    this.messageHistory.next({
      from: 'user',
      message: prompt
    });
try {
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ]
    });

    const response = await result.response;
    const text = response.text();
    console.log(text);

    this.messageHistory.next({
      from: 'bot',
      message: text
    });
    } catch (error) {
      console.error('Gemini API Error:', error);
      this.messageHistory.next({
        from: 'bot',
        message: '"We’re currently performing scheduled maintenance on this project. Please check back soon. Thank you for your understanding! — Omkar Shinde (Developer)'
      });
  }
}

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  }
  
}
