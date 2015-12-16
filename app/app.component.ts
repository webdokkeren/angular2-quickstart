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
    public heroes = HEROES;
}

var HEROES: Hero[] = [
    { "id": 1, "name": 'KARDEL SHARPEYE'},            
    { "id": 11, "name": "TRAXEX" },
    { "id": 12, "name": "FAERIE DRAGON" },
    { "id": 13, "name": "RAIGOR STONEHOOF" },
    { "id": 14, "name": "DARCHROW" },
    { "id": 15, "name": "KARROCH" },
    { "id": 16, "name": "ZHARVAKKO" },
    { "id": 17, "name": "PRINCESS OF THE MOON" },
    { "id": 18, "name": "LESALE DEATHBRINGER" },
    { "id": 19, "name": "LYRALEI" },
    { "id": 20, "name": "RHASTA" }
];