import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(parts: ReadonlyArray<string>, separator?: string): string {
    return parts.join(separator);
  }
}
