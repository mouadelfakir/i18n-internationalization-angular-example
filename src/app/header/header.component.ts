import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public languages: string[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.languages = this.translate.getLangs();
  }

  onSelectLanguage(language) {
    this.translate.use(language);
  }
}
