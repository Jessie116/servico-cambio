import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = "EXCHANGE SERVICE";

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  public onChangeLanguage(event: any): void {
    const url = event.target.src;
    if (url) {
      const filename = new URL(url).pathname.split('/').pop();
      const language = filename?.split('.')[0];
      if (language === 'pt' || language === 'en') {
        this.translate.use(language);
      }
    }
  }
  
}
