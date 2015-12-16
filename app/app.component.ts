import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.tmpl.html',
    styles: [`
        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
        .heroes .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
    `]
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