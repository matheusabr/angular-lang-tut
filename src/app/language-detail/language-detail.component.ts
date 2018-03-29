import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../models/language.model';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {
  @Input() language: Language;

  constructor() { }

  ngOnInit() {
  }

}
