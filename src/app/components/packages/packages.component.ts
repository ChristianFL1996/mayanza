import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.html',
  styleUrl: './packages.css'
})
export class PackagesComponent {
  packagesList = [
    {
      name: 'Luna de Miel',
      suite: 'Suite Ancestral o El Quetzal',
      desc: 'Empieza un matrimonio feliz con una luna de miel perfecta e inolvidable.',
      includes: [
        'Pétalos de rosas rojas en su habitación',
        'Botella de vino espumoso',
        'Tazón de frutas frescas o fresas con chocolate',
        'Desayuno romántico',
        'Válido para 2 personas'
      ],
      price: 'Contactar'
    },
    {
      name: 'Renacer',
      suite: 'Suite Junior El Quetzal',
      desc: 'Date esa escapada que necesitas para renovar el cuerpo y la mente.',
      includes: [
        'Alojamiento para dos',
        'Bebidas de bienvenida',
        'Tratamiento de spa diario por persona',
        'Desayuno a la carta',
        'Excursión de un día a Tikal (transporte, guía, entradas)'
      ],
      price: 'Contactar'
    },
    {
      name: 'Inseparables',
      suite: 'Suite con Jardín Privado',
      desc: 'Disfruta de una tarde de chicas con spa al aire libre.',
      includes: [
        'Spa day',
        'Suite con vista al jardín y jacuzzi privado',
        'Infusión de hierbas y baño de rosas',
        'Desayuno continental',
        'Cocteles y snacks ilimitados'
      ],
      price: 'Contactar'
    }
  ];

  scrollToBooking() {
    document.getElementById('bookingBar')?.scrollIntoView({ behavior: 'smooth' });
  }
}
