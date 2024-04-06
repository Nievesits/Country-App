import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region []= ['Africa', 'America','Asia','Europe','Oceania'];
  public selectionRegion?: Region;

  constructor( private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectionRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region):void {

    this.selectionRegion = region;

    this.countriesService.searchRegion(region).subscribe( countries => {
      this.countries = countries;
    });


  }

}
