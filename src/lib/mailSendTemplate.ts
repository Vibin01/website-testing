export interface MailSendTemplateProps {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  referenceId?: string;
}

/**
 * Generates the complete HTML email template for the Connect EC
 * Hiring Alignment System outreach campaign.
 * All brand colors and links strictly match https://connectec.app (#0668E1)
 */
export function generateMailSendTemplate({
  name,
  email,
  subject = "Your Hiring Strategy Deserves More Than a Target. It Needs Alignment.",
  message,
  referenceId = "preview",
}: MailSendTemplateProps): string {
  // Production link for all assets and hyperlinks
  const baseUrl = "https://connectec.app";

  // Clean salutation based on input name
  const formattedSalutation =
    name && name.trim()
      ? name.trim().toLowerCase().startsWith("dear")
        ? name.trim()
        : `Dear ${name.trim()},`
      : "Dear Sir/Madam,";

  const emailSubject =
    subject && subject.trim()
      ? subject.trim()
      : "Your Hiring Strategy Deserves More Than a Target. It Needs Alignment.";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6fa; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased;">
  <!-- Anti-trimming hidden token (prevents Gmail thread collapsing) -->
  <div style="display:none; max-height:0px; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff; opacity:0;">
    Connect EC Alignment Dispatch &bull; Reference #${referenceId}
  </div>

  <!-- OUTER WRAPPER TABLE -->
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f6fa; padding: 32px 12px;">
    <tr>
      <td align="center">
        <!-- MAIN CONTAINER (700px MAX) -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 700px; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- ================= HEADER ================= -->
          <tr>
            <td style="padding: 24px 32px; background-color: #ffffff; border-bottom: 1px solid #edf2f7;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Left: Connect EC Logo -->
                  <td align="left" valign="middle">
                    <a href="${baseUrl}" target="_blank" style="text-decoration: none; display: inline-block;">
                      <img
                        src="https://connectec.app/Connect_EC_Logo.webp"
                        alt="Connect EC"
                        width="190"
                        style="display: block; border: 0; max-width: 190px; height: auto;"
                      />
                    </a>
                  </td>
                  <!-- Right: Tagline -->
                  <td align="right" valign="middle" style="font-size: 15px; font-weight: 700; color: #0668E1; letter-spacing: -0.2px; font-family: Arial, Helvetica, sans-serif;">
                    The Hiring Alignment System <span style="font-size: 11px; vertical-align: super;">&trade;</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ================= HERO BLUE BANNER ================= -->
          <tr>
            <td style="background-color: #0668E1; padding: 46px 36px;">
              <h1 style="margin: 0 0 16px 0; font-size: 28px; line-height: 38px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px; font-family: Arial, Helvetica, sans-serif;">
                Your Hiring Strategy<br />
                Deserves More Than a Target.<br />
                It Needs Alignment.
              </h1>
              <p style="margin: 0; font-size: 15.5px; line-height: 24px; color: #ffffff; font-weight: 500; opacity: 0.96; font-family: Arial, Helvetica, sans-serif;">
                Align hiring targets. &nbsp;|&nbsp; See execution gaps. &nbsp;|&nbsp; Protect outcomes.
              </p>
            </td>
          </tr>

          <!-- ================= INTRO BODY ================= -->
          <tr>
            <td style="padding: 36px 36px 16px 36px; background-color: #ffffff;">
              <!-- Recipient Greeting -->
              <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 18px; font-family: Arial, Helvetica, sans-serif;">
                ${escapeHtml(formattedSalutation)}
              </div>

              <!-- Section Subheading -->
              <div style="font-size: 20px; font-weight: 700; color: #1e293b; line-height: 28px; margin-bottom: 20px; font-family: Arial, Helvetica, sans-serif;">
                Setting hiring targets is one thing.<br />
                Achieving them is another.
              </div>

              <!-- Paragraphs -->
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 25px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                Every organization begins with a hiring plan &mdash; approved headcount, defined budgets, assigned recruiters, and expected timelines.
              </p>
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 25px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                But business priorities change. Market conditions evolve. Hiring pressures increase.
              </p>
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 25px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                And somewhere between setting targets and delivering results, <strong style="color: #1e293b;">hiring strategy and execution can begin to drift apart</strong>.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 15px; line-height: 25px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                The challenge isn't always a lack of recruitment activity. It's knowing whether that activity is still moving the organization toward its hiring goals &mdash; and where timely intervention is needed.
              </p>

              ${
                message && message.trim()
                  ? `<!-- Custom Personal Note (if entered in form) -->
              <div style="margin: 20px 0 10px 0; background-color: #f8fafc; border-left: 4px solid #0668E1; border-radius: 4px; padding: 14px 18px; font-size: 14.5px; line-height: 24px; color: #334155;">
                <strong style="color: #0668E1;">Note:</strong> ${escapeHtml(message.trim())}
              </div>`
                  : ""
              }
            </td>
          </tr>

          <!-- ================= CALLOUT CARD ================= -->
          <tr>
            <td style="padding: 12px 36px 20px 36px; background-color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F2F7FF; border-left: 4px solid #0668E1; border-radius: 8px;">
                <tr>
                  <td style="padding: 22px 24px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 6px; font-family: Arial, Helvetica, sans-serif;">
                      Connect <span style="color: #0668E1;">EC</span><span style="font-size: 10px; vertical-align: super;">&reg;</span>
                    </div>
                    <div style="font-size: 22px; font-weight: 700; color: #0668E1; line-height: 30px; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                      The Hiring Alignment System
                    </div>
                    <p style="margin: 0; font-size: 14.5px; line-height: 23px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                      Connect EC helps employers align hiring strategy with execution realities, identify emerging gaps, and act before they disrupt hiring outcomes.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ================= THE EMPLOYER ADVANTAGE HEADING ================= -->
          <tr>
            <td style="padding: 24px 36px 16px 36px; background-color: #ffffff;">
              <div style="font-size: 12px; font-weight: 700; color: #1e293b; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 8px; font-family: Arial, Helvetica, sans-serif;">
                THE EMPLOYER ADVANTAGE
              </div>
              <div style="font-size: 24px; font-weight: 700; color: #0668E1; line-height: 32px; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                From Hiring Targets to Achievement
              </div>
              <p style="margin: 0; font-size: 15px; color: #334155; font-weight: 500; font-family: Arial, Helvetica, sans-serif;">
                With Connect EC, your organization can:
              </p>
            </td>
          </tr>

          <!-- ================= 7 FEATURE CARDS ================= -->
          <tr>
            <td style="padding: 0 24px 24px 24px; background-color: #ffffff;">
              
              <!-- Card 1 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 8px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Improve Hiring Target Achievement
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      Identify gaps between hiring targets, forecasts, and execution conditions to support timely corrective action.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Card 2 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 8px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Analyze Hiring Workload and Velocity
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      Understand hiring pressure, position load, conversion strength, and hiring velocity.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Card 3 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 8px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Identify Hiring Misalignment Early
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      Recognize when hiring priorities, capacity, evaluations, or stakeholder actions begin to drift apart.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Card 4 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 8px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Track Hiring Progress and Bottlenecks
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      See which roles are progressing, stalling, or becoming critical &mdash; and where leadership attention is needed.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Card 5 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 8px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Standardize Hiring Communication and Evaluation
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      Strengthen consistency across hiring decisions, evaluations, feedback, and stakeholder communication.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Card 6 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 8px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Strengthen Offer-to-Joining Continuity
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      Maintain visibility into post-offer engagement and follow-through to help protect joining outcomes.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Card 7 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F3F7FD; border-radius: 8px; margin-bottom: 6px;">
                <tr>
                  <td width="24" valign="top" style="padding: 14px 0 14px 16px;">
                    <div style="width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 11px solid #0668E1; margin-top: 3px;"></div>
                  </td>
                  <td valign="top" style="padding: 12px 16px 12px 6px;">
                    <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 3px; font-family: Arial, Helvetica, sans-serif;">
                      Anticipate Potential Hiring Drop-Offs
                    </div>
                    <div style="font-size: 13.5px; line-height: 20px; color: #475569; font-family: Arial, Helvetica, sans-serif;">
                      Recognize emerging candidate participation and commitment risks early enough for timely intervention.
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ================= WHY THIS MATTERS TO LEADERSHIP ================= -->
          <tr>
            <td style="background-color: #F2F7FF; padding: 36px 36px;">
              <div style="font-size: 24px; font-weight: 700; color: #0668E1; line-height: 32px; margin-bottom: 14px; font-family: Arial, Helvetica, sans-serif;">
                Why This Matters to Leadership
              </div>
              <p style="margin: 0 0 16px 0; font-size: 14.5px; line-height: 24px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                Hiring delays don't remain confined to recruitment. They can affect workforce readiness, operational capacity, business priorities, and growth plans.
              </p>
              <div style="font-size: 16px; font-weight: 700; color: #1e293b; line-height: 24px; margin-bottom: 16px; font-family: Arial, Helvetica, sans-serif;">
                More recruitment activity doesn't necessarily mean more hiring progress.
              </div>
              <p style="margin: 0; font-size: 14.5px; line-height: 24px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                Leadership needs visibility into what's progressing, what's drifting, and where intervention can make a difference &mdash; before missed targets become the outcome.
              </p>
            </td>
          </tr>

          <!-- ================= CALL TO ACTION (CTA) ================= -->
          <tr>
            <td style="padding: 38px 36px 34px 36px; background-color: #ffffff;">
              <div style="font-size: 12px; font-weight: 700; color: #1e293b; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                SEE EARLIER. ACT SOONER. SHAPE WHAT FOLLOWS.
              </div>
              <div style="font-size: 26px; font-weight: 700; color: #0668E1; line-height: 34px; margin-bottom: 16px; font-family: Arial, Helvetica, sans-serif;">
                Ready to Bring Seamless<br />Alignment to Your Hiring Strategy?
              </div>
              <p style="margin: 0 0 14px 0; font-size: 14.5px; line-height: 24px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                Setting a hiring target is only the beginning. Sustaining alignment between strategy, execution, and commitment throughout the hiring journey is what helps turn targets into achievement.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14.5px; line-height: 24px; color: #334155; font-family: Arial, Helvetica, sans-serif;">
                Discover how Connect EC's Employer Alignment System helps connect hiring priorities, execution, and outcomes.
              </p>
              
              <!-- Button -->
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left">
                    <a
                      href="${baseUrl}"
                      target="_blank"
                      style="display: inline-block; background-color: #0668E1; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: 6px; box-shadow: 0 4px 12px rgba(6,104,225,0.3); font-family: Arial, Helvetica, sans-serif;"
                    >
                      Unlock Connect EC for Free &nbsp;&rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ================= SIGN-OFF ================= -->
          <tr>
            <td style="padding: 0 36px 20px 36px; background-color: #ffffff;">
              <div style="font-size: 14.5px; color: #334155; line-height: 24px; font-family: Arial, Helvetica, sans-serif;">
                Warm regards,<br />
                <strong style="font-size: 15px; color: #1e293b;">Team Connect EC</strong><br />
                <span style="font-size: 13.5px; color: #475569;">The Hiring Alignment System&trade;</span><br />
                <span style="font-size: 12.5px; color: #64748b;">A Product of Primethic Private Limited</span>
              </div>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #d9d9d9; margin: 24px 0;" />

              <!-- Bottom Footer -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" align="left">
                    <div style="font-size: 16px; font-weight: 700; color: #1e293b; font-family: Arial, Helvetica, sans-serif;">
                      Connect <span style="color: #0668E1;">EC</span><span style="font-size: 10px; vertical-align: super;">&reg;</span>
                    </div>
                    <div style="font-size: 12px; color: #9b9b9b; margin-top: 4px; font-family: Arial, Helvetica, sans-serif;">
                      Team Connect EC
                    </div>
                  </td>
                  <td valign="top" align="right" style="font-size: 13px; color: #334155; line-height: 22px; font-family: Arial, Helvetica, sans-serif;">
                    Contact us at : <a href="mailto:hello@connectec.app" style="color: #0668E1; text-decoration: none; font-weight: 600;">hello@connectec.app</a><br />
                    Phone : +91 9499045851
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
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
