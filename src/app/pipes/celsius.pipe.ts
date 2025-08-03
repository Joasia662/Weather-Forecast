import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'celsius',
    standalone: true,
})
export class CelsiusPipe implements PipeTransform {
    transform(value: number | string | null): string {
        if (value !== "" && value != undefined && value != null && !Number.isNaN(value)) return `${value} °C`
        else return `${value}`
    }
}