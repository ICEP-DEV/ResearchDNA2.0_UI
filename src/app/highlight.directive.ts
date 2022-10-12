import { Directive } from '@angular/core';
import {  Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';
import { Component } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  @Input() searchedWord: string | undefined; // searchText
  @Input() content: string | undefined; // HTML content
  @Input() classToApply: string | undefined; //class to apply for highlighting
  @Input() setTitle = false; //
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }
  }
   
    




}

