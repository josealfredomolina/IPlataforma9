import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serietv'
})
export class SerietvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
