import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Reemplaza la configuración de 'service: "Gmail"' por el host y port
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,          // Usa 465 con secure: true para SSL
      secure: false,      // true si usas port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "arrivalfiorito@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `Has recibido un nuevo mensaje:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Mensaje: ${message}
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email enviado correctamente" }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json({ message: "Error al enviar email" }, { status: 500 });
  }
}
