import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit'
})
export class LimitPipe implements PipeTransform {

    transform(value: string, args: number): string {
        let fin: string = '...';
        return (value.length > args) ? value.substring(0, args) + fin : value;
    }

}
