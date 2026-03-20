import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './policies.html',
  styleUrl: './policies.css'
})
export class PoliciesComponent {
  GeneralPolicies = [
    'Prohibido fumar dentro de habitaciones y áreas comunes cerradas.',
    'Prohibido consumir bebidas alcohólicas (no provistas por el hotel) dentro de las habitaciones.',
    'Cualquier daño en la habitación debe reportarse inmediatamente.',
    'El hotel no se hace responsable por objetos olvidados o pérdidas dentro de las instalaciones.'
  ];

  Penalties = [
    { item: 'Fumar dentro de habitación', cost: '$600' },
    { item: 'Consumir bebidas alcohólicas', cost: '$600' },
    { item: 'Daño o deterioro de blancos', cost: '$200' },
    { item: 'Daño a televisores', cost: '$1,200' },
    { item: 'Pérdida/daño controles TV/AC', cost: '$100 c/u' },
    { item: 'Limpieza especial por incidentes', cost: '$150' },
    { item: 'Pérdida de tarjeta de acceso', cost: '$200' }
  ];

  isModalOpen = false;
  activeTab = 'general';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
