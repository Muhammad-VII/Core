import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore',
})
export class SeemorePipe implements PipeTransform {
  transform(char: string, count: number): string {
    return char.split(' ').slice(0, count).join(' ');
  }
}
