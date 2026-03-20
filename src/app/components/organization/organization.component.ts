import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization.html',
  styleUrl: './organization.css'
})
export class OrganizationComponent {
  selectedRole: any = null;

  levels = [
    {
      title: 'Nivel Directivo',
      cardClass: 'director',
      roles: [
        {
          name: 'Ángel de León', title: 'Gerente General',
          desc: 'Responsable de la gestión global del hotel, estrategias, administración, finanzas y cumplimiento de objetivos.'
        }
      ]
    },
    {
      title: 'Niveles de Gerencia',
      cardClass: '',
      roles: [
        { name: 'Ervin Bich', title: 'Gerente de Operaciones', desc: 'Coordinador de check-in, check-out, conserjes, personal de limpieza, restaurantes, botones, bebidas y seguridad.' },
        { name: 'Antonio de León', title: 'Gerente Finanzas', desc: 'Gestiona cuentas, presupuestos, tesorería y reportes financieros.' },
        { name: 'Emilio Castellanos', title: 'Gerente Marketing', desc: 'Diseña campañas, ventas de habitaciones, eventos y relaciones públicas.' },
        { name: 'Cristina Rabanales', title: 'Gerente RRHH', desc: 'Reclutamiento, formación, administración de beneficios y relaciones laborales.' },
        { name: 'Christian Flores', title: 'Director TI', desc: 'Gestión de tecnologías de la información, supervisar sistemas y soporte técnico.' }
      ]
    }
  ];

  openRole(role: any) {
    this.selectedRole = role;
  }

  closeRole() {
    this.selectedRole = null;
  }
}
