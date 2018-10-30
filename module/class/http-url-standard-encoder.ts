
export class HttpUrlStandardEncoder {

  private urlHasParams(url: string): boolean {
    return url.includes('?');
  }

  private getSeparatedUrlFromUrl(url: string): string[] {
    return url.split('?');
  }

  private encodeParams(paramsString: string): string {
    const splitedParams = paramsString.split('&');
    return splitedParams.map(params => {
      const paramSplited = params.split('=');
      return encodeURIComponent(paramSplited[0]) + '=' + encodeURIComponent(paramSplited[1]);
    }).join('&');
  }

  encodeUrl(url: string): string {
    if (this.urlHasParams(url)) {
      const separatedUrl = this.getSeparatedUrlFromUrl(url);
      return separatedUrl[0] + '?' + this.encodeParams(separatedUrl[1]);
    } else {
      return url;
    }
  }
}
