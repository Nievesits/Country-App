import { CountriesService } from './../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';




@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',

})


export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService   : CountriesService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphacode( id ) ),
    )
    .subscribe(country => {

      if (!country){
        return this.router.navigateByUrl('home');
      }
      return this.country = country;


    });
  }


  }





