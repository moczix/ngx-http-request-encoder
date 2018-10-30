import { HttpUrlEncodingCodec } from '@angular/common/http';

export class HttpUrlParamsEncoder extends HttpUrlEncodingCodec {

  private standardEncoding(value: string): string {
    return encodeURIComponent(value);
  }

  encodeKey(key: string): string {
    return this.standardEncoding(key);
  }

  encodeValue(value: string): string {
    return this.standardEncoding(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string) {
    return decodeURIComponent(value);
  }
}
