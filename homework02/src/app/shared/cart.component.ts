import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


@Component({
    selector : 'pm-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent {
    faCart = faCartPlus;
    @Input() addcart: string = 'aggiungi al carrello';

    @Output() outputAddCart: EventEmitter<string> = new EventEmitter();
    
    onClick() {
        this.outputAddCart.emit(this.addcart);
    }
}