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

    // Configure Zoho SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@finexactsolutions.co.ke",  // your Zoho email
        pass: process.env.ZOHO_APP_PASSWORD    // app password stored in Netlify
      },
    });

    await transporter.sendMail({
      from: `"FinExact Solutions" <info@finexactsolutions.co.ke>`,
      to: "info@finexactsolutions.co.ke", // receive messages here
      subject: `New Contact Message from ${data.firstName} ${data.lastName}`,
      text: `
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Company: ${data.company}
        Service: ${data.service}
        Message: ${data.message}
      `,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
        <p><b>Email:</b> ${data.email}</p>
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
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
}
