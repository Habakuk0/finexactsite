import nodemailer from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Ignore if honeypot is filled
    if (data.botField) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Bot detected" }),
      };
    }

    // Configure Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,         // your Zoho email
        pass: process.env.ZOHO_APP_PASSWORD,  // app password
      },
    });

    await transporter.sendMail({
      from: `"FinExact Solutions" <${process.env.ZOHO_EMAIL}>`,
      to: "info@finexactsolutions.co.ke",
      subject: `New Contact Message from ${data.firstName} ${data.lastName}`,
      text: `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Service: ${data.service}
Message: ${data.message}
      `,
      html: `
<h3>New Contact Message</h3>
<p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
<p><b>Email:</b> ${data.email}</p>
<p><b>Phone:</b> ${data.phone}</p>
<p><b>Company:</b> ${data.company}</p>
<p><b>Service:</b> ${data.service}</p>
<p><b>Message:</b> ${data.message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error?.message || "Internal Server Error" }),
    };
  }
}
