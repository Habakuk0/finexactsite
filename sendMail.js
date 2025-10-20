// sendMail.js
import nodemailer from "nodemailer";

/**
 * sendMail function
 * @param {Object} formData - { firstName, lastName, email, company, service, message }
 * @returns {Promise<Object>} - { status: 200/500, message: string }
 */
export async function sendMail(formData) {
  const { firstName, lastName, email, company, service, message } = formData;

  if (!firstName || !email || !message) {
    return { status: 400, message: "Missing required fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // TLS
      auth: {
        user: process.env.ZOHO_USER, // your Zoho email
        pass: process.env.ZOHO_PASS, // your Zoho app password
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Message: ${service || "General Inquiry"}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "N/A"}
Service: ${service || "N/A"}
Message: ${message}
      `,
      html: `
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || "N/A"}</p>
<p><strong>Service:</strong> ${service || "N/A"}</p>
<p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { status: 200, message: "Message sent successfully!" };
  } catch (error) {
    console.error("SendMail error:", error);
    return { status: 500, message: "Failed to send message", error: error.message };
  }
}
