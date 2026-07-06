import nodemailer from 'nodemailer';
import path from 'path';


export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOTPEmail(email: string, otp: string, name:string): Promise<void> {
  const mailOptions = {
  from: `"Connect EC" <${process.env.SMTP_USER}>`,
   to: email,
    subject: 'Connect EC | Your OTP for the Hiring Alignment Test',
    
    html:  `<!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <table width="800" cellpadding="0" cellspacing="0" style="max-width:800px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="padding:40px 50px;border-bottom:2px solid #d9d9d9;">
                    <table width="100%">
                      <tr>
                        <td>
                        <img
                           src="${process.env.BASE_URL}/Connect_EC_Logo.webp"
  alt="Logo"
  width="180"
/>
                        </td>

                      
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Main Content -->
                <tr>
                  <td style="padding:40px 50px;">

                    <h1
                      style="
                        text-align:center;
                        color:#0668E1;
                        font-size:36px;
                        font-weight:600;
                        margin-bottom:40px;
                      "
                    >
                      AAA Framework Alignment
                    </h1>

                    <p style="font-size:18px; text-transform: capitalize;">Hello ${name},</p>

                    <p style="font-size:18px;margin-top:25px;">
                      Your One-Time Password (OTP) is:
                    </p>

                    <div
                      style="
                        background:#f5f5f5;
                        border:1px solid #e5e5e5;
                        padding:20px;
                        text-align:center;
                        font-size:32px;
                        font-weight:bold;
                        letter-spacing:8px;
                        margin:30px 0;
                        border-radius:8px;
                      "
                    >
                      ${otp}
                    </div>

                    <p style="font-size:18px;">
                      This OTP is valid for <b>10</b> minutes.
                      Please do not share it with anyone.
                    </p>

                    <p style="font-size:18px;margin-top:20px;">
                      If you did not request this, please ignore this email.
                    </p>

                    <p
                      style="
                        color:#9F9F9F;
                        font-size:16px;
                        margin-top:30px;
                      "
                    >
                      This is an auto-generated email. Please do not reply.
                    </p>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td
                    style="
                      border-top:2px solid #d9d9d9;
                      padding:30px 20px;
                    "
                  >
                    <table width="100%">
                      <tr>

                        <td>
                          <img
  src="${process.env.BASE_URL}/Connect_EC_Logo.webp"
  alt="Logo"
  width="180"
/>

                          <p
                            style="
                              color:#9F9F9F;
                              font-size:18px;
                              margin-top:10px;
                            "
                          >
                            Team Connect EC
                          </p>
                        </td>

                        <td align="right">
                          <p style="font-size:16px;">
                            Contact us:
                            <a
                              href="mailto:support@connectec.app"
                              style="color:#0668E1;"
                            >
                              support@connectec.app
                            </a>
                          </p>

                          <p style="font-size:16px;">
                            Phone: +91 94990 45981
                          </p>
                        </td>

                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  await transporter.verify();
// console.log("SMTP Connected");

  await transporter.sendMail(mailOptions);
}
