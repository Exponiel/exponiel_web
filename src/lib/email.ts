import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // false for STARTTLS on port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL,
    to: "bjtuzzova@mail.ru",
    subject: `Новая заявка от ${name} - Exponiel`,
    html: `
      <h2>Новая заявка с сайта Exponiel</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Компания:</strong> ${company}</p>
      <p><strong>Сообщение:</strong></p>
      <p>${message}</p>
      <hr />
      <p><small>Отправлено с exponiel.ru</small></p>
    `,
    text: `
      Новая заявка с сайта Exponiel

      Имя: ${name}
      Email: ${email}
      Компания: ${company}

      Сообщение:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
