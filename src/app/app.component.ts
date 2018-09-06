import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    static searchItemsFromArray(array: any[], value: any, attributes: string[]) {
        if (value && value !== '') {
            const arrayCopy = JSON.parse(JSON.stringify(array));
            let size = arrayCopy.length;
            for (let i = 0; i < size; i++) {
                let exists = false;
                for (let j = 0; j < attributes.length; j++) {
                    const a = attributes[j].split('.');
                    let obj = arrayCopy[i];
                    for (let k = 0; k < a.length; k++) {
                        while (obj && obj.hasOwnProperty(a[k])) {
                            obj = obj[a[k]];
                        }
                        if (obj && obj.toString().toUpperCase().includes(value.toString().toUpperCase())) {
                            exists = true;
                        }
                    }
                }
                if (!exists) {
                    arrayCopy.splice(i, 1);
                    i--; size--;
                }
            }
            return arrayCopy;
        } else {
            return array;
        }
    }
    static getX() {
        return window.innerWidth;
    }

    static sortByProperty(objArray: Array<any>, prop, direction) {
        switch (prop) {
            case 'rank':
                prop = 'rank.id';
                break;
        }
        if (arguments.length < 2) { throw new Error('ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION'); }
        if (!Array.isArray(objArray)) { throw new Error('FIRST ARGUMENT NOT AN ARRAY'); }
        const clone = objArray.slice(0);
        const direct = arguments.length > 2 ? arguments[2] : 1; // Default to ascending
        const propPath = (prop.constructor === Array) ? prop : prop.split('.');
        clone.sort(function (a, b) {
            for (const p in propPath) {
                if (a[propPath[p]] && b[propPath[p]]) {
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            // convert numeric strings to integers
            a = a + '';
            b = b + '';
            a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;
            return ((a < b) ? -1 * direct : ((a > b) ? direct : 0));
        });
        // console.log(clone);
        return clone;
    }
}
