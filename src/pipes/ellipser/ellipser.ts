import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EllipserPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'ellipser',
})
export class EllipserPipe implements PipeTransform {
  /**
   * Takes a value and make ellipsis
   */
  transform(value: string, args?) {
    if (value.length > args.clength)
      return '<b>[item length] ' + value.length + '</b> ' + value.substring(0, args.clength) + '...';
    
    return '<i>[item length] ' + value.length + '</i> ' + value;
  }
}
