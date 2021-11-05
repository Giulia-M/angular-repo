import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faStar } from '@fortawesome/free-solid-svg-icons';



@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    @Input() rating: number = 0;
    @Output() outputRating: EventEmitter<number> = new EventEmitter();
    faStar = faStar;

    get cropWidth() {
        return this.rating * 75 / 5;
    }

    onClick() {
        this.outputRating.emit(this.rating);
    }
}