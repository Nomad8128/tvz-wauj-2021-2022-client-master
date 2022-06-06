import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./security/authentication.service";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hardware App';
  currentLanguage: String | undefined;

  languageList = [
    { code: 'en', label: 'english' },
    { code: 'hr', label: 'croatian' }
  ];

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('hr');
    translate.use('hr');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']).then();
  }
  ngOnInit(): void {
    this.currentLanguage = "Hrvatski"
  }
  onLanguageChange(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
