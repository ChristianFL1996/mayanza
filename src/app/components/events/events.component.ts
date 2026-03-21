import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent {
  salones = [
    {
      name: 'Salón Principal',
      capacity: 'Hasta 150 personas',
      features: ['Aire acondicionado', 'Mobiliario Premium', 'Iluminación cálida'],
      desc: 'Nuestro salón más exclusivo, ideal para bodas y conferencias grandes.',
      img: 'Imagenes/Salon de eventos (2).jpeg'
    },
    {
      name: 'Jardín de Eventos',
      capacity: 'Hasta 200 personas',
      features: ['Al aire libre', 'Vista al lago', 'Decoración floral sugerida'],
      desc: 'Un espacio mágico bajo las estrellas. *Nota: El jardín y los salones se reservan por separado.*',
      img: 'Imagenes/AREA DE PARQUE.jpeg'
    }
  ];

  mobiliario = [
    { type: 'Mesas', spec: 'Mesas redondas (10 personas) o mesas imperiales de madera rústica.' },
    { type: 'Sillas', spec: 'Sillas Tiffany doradas o sillas Avant Garde de madera.' },
    { type: 'Flores', spec: 'Arreglos elaborados con flores de temporada (Lirios, Orquídeas locales y Rosas).' }
  ];

  isQuoteModalOpen = false;
  quoteData = {
    name: '',
    phone: '',
    email: '',
    eventType: 'Boda',
    guests: 50,
    date: ''
  };

  openQuoteModal() {
    this.isQuoteModalOpen = true;
  }

  closeQuoteModal() {
    this.isQuoteModalOpen = false;
  }

  submitQuote(event: Event) {
    event.preventDefault();
    alert(`Enviando alerta al correo del hotel (simulado con EmailJS)... Datos: ${this.quoteData.name}, ${this.quoteData.email}`);
    const msg = `Hola Hotel Mayanza, quisiera cotizar un evento.%0A%0A*Tipo:* ${this.quoteData.eventType}%0A*Invitados:* ${this.quoteData.guests}%0A*Fecha:* ${this.quoteData.date}%0A*Nombre:* ${this.quoteData.name}%0A*Correo:* ${this.quoteData.email}`;
    const waUrl = `https://wa.me/50212345678?text=${msg}`;
    window.open(waUrl, '_blank');
    this.closeQuoteModal();
  }
}
