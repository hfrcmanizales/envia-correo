import express from 'express';
import { Resend } from 'resend';

const router = express.Router();




// Ruta POST para enviar correo
router.post('/correo', async (req, res) => {
  const { name, email, message } = req.body;

  const resend = new Resend('re_YNwpbgsY_Dh7HL9Qku3W2otVEKnQjqwHF');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['fernandorestrepo@hotmail.es'],
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error al enviar correo:', error);
      return res.status(500).json({ message: 'Error al enviar el correo', error });
    }

    console.log('Correo enviado correctamente:', data);
    return res.status(200).json({ message: 'Correo enviado correctamente', data });

  } catch (err) {
    console.error('Error en el servidor:', err);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;
