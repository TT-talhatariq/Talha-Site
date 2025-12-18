// Email template for Web Development course enrollment

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
}

export const createWebDevEmailTemplate = (formData: FormData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web Development Course Enrollment</title>
        <style>
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
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 Web Development Course Enrollment!</h1>
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

// Email template for Remote Work course enrollment
export const createRemoteWorkEmailTemplate = (formData: FormData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Remote Work Course Enrollment</title>
        <style>
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
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🌍 Remote Work Course Enrollment!</h1>
                <p>Work Globally & Earn USD Salaries</p>
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
    </body>
    </html>
  `;
};



// Email sending service
export const sendEnrollmentEmail = async (formData: FormData, courseType: 'web-dev' | 'remote-work', screenshotFile?: File) => {
  try {
    const emailTemplate = courseType === 'web-dev' 
      ? createWebDevEmailTemplate(formData)
      : createRemoteWorkEmailTemplate(formData);

    const subject = courseType === 'web-dev'
      ? `🚀 Web Dev Enrollment - ${formData.name}`
      : `🌍 Remote Work Enrollment - ${formData.name}`;

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