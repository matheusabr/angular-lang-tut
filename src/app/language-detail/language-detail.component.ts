import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Language } from '../models/language.model';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {
  @Input() language: Language;

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLanguage();
  }

  goBack(): void {
    this.location.back();
  }
  
  getLanguage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.languageService.getLanguage(id)
      .subscribe(language => this.language = language);
  }

  save(): void {
    this.languageService.updateLanguage(this.language)
      .subscribe(() => this.goBack());
  }

}
