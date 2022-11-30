import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense} from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
