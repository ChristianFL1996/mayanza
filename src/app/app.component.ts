import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BookingBarComponent } from './components/booking-bar/booking-bar.component';
import { AboutComponent } from './components/about/about.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { PackagesComponent } from './components/packages/packages.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent, HeroComponent, BookingBarComponent, AboutComponent,
    RoomsComponent, ExperiencesComponent, PackagesComponent, EventsComponent,
    GalleryComponent, AmenitiesComponent, ReviewsComponent, PoliciesComponent, OrganizationComponent,
    ContactComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mayanza';
}
