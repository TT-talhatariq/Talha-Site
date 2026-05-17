// Email templates for course enrollments

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
}

export type CourseType = 'web-dev' | 'remote-work' | 'upwork' | 'linkedin';

const sharedStyles = `
  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
  .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
  .section { margin-bottom: 25px; }
  .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
  .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #3b82f6; }
  .footer { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
  .highlight { background: #dbeafe; padding: 15px; border-radius: 8px; border: 1px solid #93c5fd; }
  .price { font-size: 24px; font-weight: bold; color: #059669; }
`;

interface EmailHeader {
  title: string;
  subtitle?: string;
}

// Generic enrollment email body shared by every course
const buildEnrollmentEmail = (formData: FormData, header: EmailHeader) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${header.title}</title>
        <style>${sharedStyles}</style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>${header.title}</h1>
                ${header.subtitle ? `<p>${header.subtitle}</p>` : ''}
            </div>

            <div class="content">
                <div class="section">
                    <div class="label">👤 Full Name:</div>
                    <div class="value">${formData.name}</div>
                </div>

                <div class="section">
                    <div class="label">📧 Email Address:</div>
                    <div class="value">${formData.email}</div>
                </div>

                <div class="section">
                    <div class="label">📱 WhatsApp Number:</div>
                    <div class="value">${formData.whatsapp}</div>
                </div>

                <div class="section">
                    <div class="label">🏙️ City:</div>
                    <div class="value">${formData.city}</div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Email template for Web Development course enrollment
export const createWebDevEmailTemplate = (formData: FormData) =>
  buildEnrollmentEmail(formData, {
    title: '🚀 Web Development Course Enrollment!',
  });

// Email template for Remote Work course enrollment
export const createRemoteWorkEmailTemplate = (formData: FormData) =>
  buildEnrollmentEmail(formData, {
    title: '🌍 Remote Work Course Enrollment!',
    subtitle: 'Work Globally & Earn USD Salaries',
  });

// Email template for Upwork course enrollment
export const createUpworkEmailTemplate = (formData: FormData) =>
  buildEnrollmentEmail(formData, {
    title: '💼 Upwork Mastery Course Enrollment!',
    subtitle: 'Win Clients & Land $1,000+ Projects',
  });

// Email template for LinkedIn course enrollment
export const createLinkedInEmailTemplate = (formData: FormData) =>
  buildEnrollmentEmail(formData, {
    title: '🔗 LinkedIn Mastery Course Enrollment!',
    subtitle: 'Turn Your Profile Into a Client & Recruiter Magnet',
  });

// Per-course configuration for the enrollment email
const courseEmailConfig: Record<
  CourseType,
  { template: (formData: FormData) => string; subject: (name: string) => string }
> = {
  'web-dev': {
    template: createWebDevEmailTemplate,
    subject: (name) => `🚀 Web Dev Enrollment - ${name}`,
  },
  'remote-work': {
    template: createRemoteWorkEmailTemplate,
    subject: (name) => `🌍 Remote Work Enrollment - ${name}`,
  },
  upwork: {
    template: createUpworkEmailTemplate,
    subject: (name) => `💼 Upwork Mastery Enrollment - ${name}`,
  },
  linkedin: {
    template: createLinkedInEmailTemplate,
    subject: (name) => `🔗 LinkedIn Mastery Enrollment - ${name}`,
  },
};

// Email sending service
export const sendEnrollmentEmail = async (
  formData: FormData,
  courseType: CourseType,
  screenshotFile?: File,
) => {
  try {
    const config = courseEmailConfig[courseType];
    const emailTemplate = config.template(formData);
    const subject = config.subject(formData.name);

    const emailFormData = new FormData();
    emailFormData.append('email', 'learnwithtalha238@gmail.com');
    emailFormData.append('subject', subject);
    emailFormData.append('html', emailTemplate);
    emailFormData.append('replyTo', formData.email);

    if (screenshotFile) {
      emailFormData.append('file', screenshotFile);
    }

    const response = await fetch('https://hm-backend-u080.onrender.com/learn-with-talha/send-email', {
      method: 'POST',
      body: emailFormData
    });

    if (!response.ok) {
      throw new Error(`Email API responded with status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
