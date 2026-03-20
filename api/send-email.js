/**
 * Vercel Serverless Function: Send Reservation Email via Resend
 * This function sends two emails: one to the hotel and one to the guest.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    to_email,
    to_name,
    res_num,
    suite,
    checkin,
    checkout,
    adultos,
    ninos,
    habitaciones,
    paquete,
    telefono,
    notas
  } = req.body;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    return res.status(500).json({ error: 'Email service misconfigured' });
  }

  try {
    // 1. Email to the Hotel
    const hotelEmail = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Mayanza Grand Hotels <reservas@mayanza.com>', // Note: This domain must be verified in Resend
        to: ['mayanzahotels@gmail.com'],
        subject: `Nueva Reserva: ${res_num} - ${to_name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1a1208;">
            <h2 style="color: #a68031;">Nueva Solicitud de Reserva</h2>
            <p>Se ha recibido una nueva solicitud a través del sitio web:</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <p><strong>ID Reserva:</strong> ${res_num}</p>
            <p><strong>Huésped:</strong> ${to_name}</p>
            <p><strong>Email:</strong> ${to_email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Habitación:</strong> ${suite}</p>
            <p><strong>Fechas:</strong> ${checkin} al ${checkout}</p>
            <p><strong>Detalles:</strong> ${habitaciones} Hab. | ${adultos} Adultos | ${ninos} Niños</p>
            <p><strong>Paquete:</strong> ${paquete}</p>
            <p><strong>Notas:</strong> ${notas}</p>
          </div>
        `
      })
    });

    // 2. Confirmation Email to the Guest (Optional but recommended)
    const guestEmail = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Mayanza Grand Hotels <reservas@mayanza.com>',
        to: [to_email],
        subject: `Confirmación de Solicitud de Reserva - ${res_num}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1a1208; text-align: center;">
            <h1 style="color: #a68031;">¡Gracias por elegir Mayanza!</h1>
            <p>Estimado/a <strong>${to_name}</strong>,</p>
            <p>Hemos recibido tu solicitud de reserva con el número <strong>${res_num}</strong>.</p>
            <p>Nuestro equipo se pondrá en contacto contigo a la brevedad para finalizar los detalles del pago y confirmar tu estancia.</p>
            <div style="background: #f9f6f0; padding: 20px; margin: 20px 0; border: 1px solid #a68031; text-align: left;">
              <p><strong>Resumen de tu estancia:</strong></p>
              <ul>
                <li><strong>Suite:</strong> ${suite}</li>
                <li><strong>Check-in:</strong> ${checkin}</li>
                <li><strong>Check-out:</strong> ${checkout}</li>
              </ul>
            </div>
            <p>Atentamente,<br>El equipo de Mayanza Grand Hotels</p>
          </div>
        `
      })
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
