import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(
    value: string,
    searchValue: string | RegExp,
    replaceValue: string,
  ): string {
    const result = value.replace(searchValue, replaceValue);
    /*console.log(`Jerry own pipe, original value: ${value},
    search value: ${searchValue}, replaceValue: ${replaceValue}, result: ${result}`);*/
    return result;
  }
}
