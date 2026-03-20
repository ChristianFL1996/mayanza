import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './booking-bar.html',
  styleUrl: './booking-bar.css'
})
export class BookingBarComponent {
  openDropdown: string | null = null;
  
  checkin: string = '';
  checkout: string = '';
  
  adults: number = 2;
  children: number = 0;
  rooms: number = 1;

  tarifa: string = 'estandar';
  tarifaName: string = 'Tarifa estándar más baja';
  codigoGrupo: string = '';

  get fechasStr(): string {
    if (this.checkin && this.checkout) {
      return `${this.checkin} - ${this.checkout}`;
    }
    return 'Selecciona tus fechas';
  }

  get huespedesStr(): string {
    return `${this.adults} adultos · ${this.children} niños · ${this.rooms} hab`;
  }

  toggleDropdown(name: string) {
    if (this.openDropdown === name) {
      this.openDropdown = null;
    } else {
      this.openDropdown = name;
    }
  }

  closeDropdown() {
    this.openDropdown = null;
  }

  changeCount(type: 'adults'|'children'|'rooms', amount: number) {
    if (type === 'adults') this.adults = Math.max(1, this.adults + amount);
    if (type === 'children') this.children = Math.max(0, this.children + amount);
    if (type === 'rooms') this.rooms = Math.max(1, this.rooms + amount);
  }

  selectTarifa(id: string, name: string) {
    this.tarifa = id;
    this.tarifaName = name;
  }

  clearTarifa(event: Event) {
    event.stopPropagation();
    this.tarifa = 'estandar';
    this.tarifaName = 'Tarifa estándar más baja';
  }
}
