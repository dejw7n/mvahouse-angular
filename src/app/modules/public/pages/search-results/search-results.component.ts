import { Component } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HotelService } from "src/app/core/services/hotel.service";

@Component({
	selector: "app-search-results",
	templateUrl: "./search-results.component.html",
	styleUrls: ["./search-results.component.less"],
})
export class SearchResultsComponent {
	faMagnifyingGlass = faMagnifyingGlass;

	rangeValues: number[] = [0, 100];

	hotelDetails: any;
	constructor(private hotelService: HotelService) {
		this.hotelDetails = this.hotelService.getHotelDetails();
	}
}
