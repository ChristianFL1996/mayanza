import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './amenities.html',
  styleUrl: './amenities.css'
})
export class AmenitiesComponent {
  amenities = [
    { name: 'Piscina & Bar', desc: 'Disfruta cócteles premium', icon: 'droplets' },
    { name: 'Wifi Gratuito', desc: 'En todas las áreas', icon: 'wifi' },
    { name: 'Restaurante Exclusivo', desc: 'Cocina nacional e internacional', icon: 'utensils' },
    { name: 'Servicio a Habitación', desc: 'Diponible 6:30 hrs a 21:30 hrs', icon: 'coffee' },
    { name: 'Área para Mascotas', desc: 'Zonas exclusivas Pet-Friendly', icon: 'paw-print', isNew: true },
    { name: 'Área de Fumadores', desc: 'Terrazas abiertas acondicionadas', icon: 'cigarette', isNew: true },
    { name: 'Recepción 24 Hrs', desc: 'Asistencia garantizada', icon: 'concierge-bell' },
    { name: 'Parqueo Privado', desc: 'Seguridad 24/7', icon: 'car' }
  ];
}
