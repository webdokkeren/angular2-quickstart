import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.tmpl.html'
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Kardel Sharpeye'
    }            
}

var HEROES: Hero[] = [
    { "id": 11, "name": "TRAXEX" },
    { "id": 12, "name": "FAERIE DRAGON" },
    { "id": 13, "name": "RAIGOR STONEHOOF" },
    { "id": 14, "name": "DARCHROW" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];