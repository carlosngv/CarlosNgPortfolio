"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<ContactResult> {
  const { name, email, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    // Dev fallback: log the message and return success so the UI works
    console.log("[Contact Form]", { name, email, message });
    return { success: true };
  }

  try {
    await resend.emails.send({
      // Update 'from' to your verified Resend domain, e.g. "Portfolio <hello@yourdomain.com>"
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "carlosngva@outlook.com",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="margin-top: 0; color: #0a0a0a;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #525252; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #525252;">Email</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-weight: 500;">${email}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
          <p style="color: #525252; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
