import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
// import emailjs from '@emailjs/browser';
// import QRCode from 'qrcode';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  isSubmitting = false;

  async sendEmail(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;

    try {
      // Here we simulate the EmailJS integration and QR generation
      // In a real app, you would use:
      // const qrDataUrl = await QRCode.toDataURL(`Reserva:${this.formData.nombre}|${this.formData.email}`);
      // await emailjs.send('service_id', 'template_id', {...this.formData, qr_code: qrDataUrl}, 'public_key');
      
      console.log('Contacto enviado (simulado)', this.formData);
      alert('¡Mensaje enviado exitosamente! Revisa tu correo electrónico para el código QR de Check-in.');
      
      this.formData = { nombre: '', email: '', telefono: '', mensaje: '' };
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar el mensaje. Intente de nuevo.');
    } finally {
      this.isSubmitting = false;
    }
  }

  scrollToBooking() {
    document.getElementById('bookingBar')?.scrollIntoView({ behavior: 'smooth' });
  }
}
