import { ParseConfig } from './models/parse.config';
import { NgModule, OpaqueToken, ModuleWithProviders } from "@angular/core";
import { ParseService } from './Service';

export const PARSE_CONFIG = new OpaqueToken('parse config');

@NgModule({

})
export class ParseModule {
  static forRoot(parseConfig: ParseConfig = { appId: 'myAppId', serverUrl: 'http://localhost:1337/' }): ModuleWithProviders {
    return {
      ngModule: ParseModule,
      providers: [
        {
          provide: PARSE_CONFIG, useValue: parseConfig
        },
        ParseService
      ]
    };
  }
}