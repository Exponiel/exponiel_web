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
    subject: `New inquiry from ${name} - Exponiel`,
    html: `
      <h2>New inquiry from Exponiel website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p><small>Sent from exponiel.ru</small></p>
    `,
    text: `
      New inquiry from Exponiel website

      Name: ${name}
      Email: ${email}
      Company: ${company}

      Message:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
