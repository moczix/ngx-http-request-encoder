import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpUrlParamsEncoder } from './class/http-url-params-encoder';
import { HttpUrlStandardEncoder } from './class/http-url-standard-encoder';

@Injectable()
export class HttpRequestEncoderInterceptor implements HttpInterceptor {

  private urlEncoder: HttpUrlStandardEncoder = new HttpUrlStandardEncoder();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = new HttpParams({
      fromString: req.params.toString(),
      encoder: new HttpUrlParamsEncoder()
    });

    const encodedRequest = req.clone({
      url: this.urlEncoder.encodeUrl(req.url),
      params: params
    });

    return next.handle(encodedRequest);
  }
}
