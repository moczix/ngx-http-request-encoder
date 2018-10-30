import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestEncoderInterceptor } from './http-request-encoder.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestEncoderInterceptor, multi: true },
  ]
})
export class HttpRequestEncoderModule { }
