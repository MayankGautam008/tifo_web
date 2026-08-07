import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log(`[Email Service] Mock Email sent to ${options.to}: "${options.subject}"`)
    return true
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: EMAIL_FROM || '"TIFO Ambassador Program" <ambassadors@tifo.in>',
      to: options.to,
      subject: options.subject,
      html: options.html,
    })

    console.log(`[Email Service] Email successfully sent to ${options.to}`)
    return true
  } catch (error) {
    console.error('[Email Service] Failed to send email:', error)
    return false
  }
}

export const sendApplicationAcknowledgement = async (
  email: string,
  fullName: string,
  applicationId: string
): Promise<void> => {
  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1410; line-height: 1.6;">
      <div style="background: linear-gradient(135deg, #C1440E, #E05A1A); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">TIFO India</h1>
        <p style="color: #F5F0E8; margin: 5px 0 0 0; font-size: 14px;">Student Ambassador Program</p>
      </div>

      <div style="background: #F7F5F2; padding: 30px; border: 1px solid #E4DDD5; border-radius: 0 0 12px 12px;">
        <h2 style="color: #1A1410; font-size: 18px; margin-top: 0;">Application Received! 🎉</h2>
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>Thank you for applying to the <strong>TIFO Student Ambassador Program</strong>. We have successfully registered your application.</p>
        
        <div style="background: #ffffff; border-left: 4px solid #C1440E; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; font-size: 13px; color: #6B6560;">Your Application ID:</p>
          <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #C1440E; font-family: monospace;">${applicationId}</p>
        </div>

        <h3 style="color: #1A1410; font-size: 15px;">What Happens Next?</h3>
        <ol style="padding-left: 20px; color: #4A4038;">
          <li><strong>Application Review:</strong> Our team is evaluating profiles and responses.</li>
          <li><strong>Shortlisting:</strong> If shortlisted, you will receive an invitation for an online interview via email.</li>
          <li><strong>Final Selection & Onboarding:</strong> Selected candidates will receive official onboarding materials and campus guidelines.</li>
        </ol>

        <p style="font-size: 13px; color: #6B6560; margin-top: 25px;">Please note: Submitting an application does not guarantee selection. Keep an eye on your inbox for further updates.</p>

        <hr style="border: none; border-top: 1px solid #E4DDD5; margin: 25px 0;" />
        <p style="font-size: 12px; color: #9A8E85; text-align: center;">TIFO Technologies • Build Your Campus. Shape the Future of Food.</p>
      </div>
    </div>
  `

  await sendEmail({
    to: email,
    subject: `TIFO Student Ambassador Application Received [${applicationId}]`,
    html,
  })
}
