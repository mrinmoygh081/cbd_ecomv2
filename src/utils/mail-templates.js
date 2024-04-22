export const QUOTES_TEMPLATE = (data) => {
  let normalArray = JSON.parse(data?.interest);
  let interests = normalArray.join(", ");

  return `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Email From JUMPING GOOSE</title>
              <style>
                .container {
                  width: 100%;
                  height: 100%;
                  padding: 20px;
                  background-color: #f4f4f4;
                }
                .email {
                  width: 80%;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                }
                .email-header {
                  background-color: #ff0e7a;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
                .email-body {
                  padding: 20px;
                }
                .email-footer {
                  background-color: #ff0e7a;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="email">
                  <div class="email-header">
                    <h1>GET A QUOTE</h1>
                  </div>
                  <div class="email-body">
                    <p>Welcome to Jumping Goose</p>
                    <h4>Details:</h4>
                    <p>NAME: ${data?.name}</p>
                    <p>PHONE: ${data?.phone}</p>
                    <p>EMAIL: ${data?.email}</p>
                    <p>WEBSITE/SOCIAL MEDIA URL: ${data?.url}</p>
                    <p>LOOKING FOR: ${interests}</p>
                    <p>Please check the dashboard for further information.</p>
                  </div>
                  <div class="email-footer">
                    <p>Don't reply to this mail.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;
};

export const CONTACTS_TEMPLATE = (data) => {
  return `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Email From JUMPING GOOSE</title>
              <style>
                .container {
                  width: 100%;
                  height: 100%;
                  padding: 20px;
                  background-color: #f4f4f4;
                }
                .email {
                  width: 80%;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                }
                .email-header {
                  background-color: #ff0e7a;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
                .email-body {
                  padding: 20px;
                }
                .email-footer {
                  background-color: #ff0e7a;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="email">
                  <div class="email-header">
                    <h1>Enquiry From Let's Talk</h1>
                  </div>
                  <div class="email-body">
                    <p>Welcome to Jumping Goose</p>
                    <h4>Details:</h4>
                    <p>NAME: ${data?.name}</p>
                    <p>PHONE: ${data?.phone}</p>
                    <p>EMAIL: ${data?.email}</p>
                    <p>MESSAGE: ${data?.message}</p>
                    <p>Please check the dashboard for further information.</p>
                  </div>
                  <div class="email-footer">
                    <p>Don't reply to this mail.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;
};

export const CAREER_TEMPLATE = (data, headline) => {
  return `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Email From JUMPING GOOSE</title>
              <style>
                .container {
                  width: 100%;
                  height: 100%;
                  padding: 20px;
                  background-color: #f4f4f4;
                }
                .email {
                  width: 80%;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                }
                .email-header {
                  background-color: #ff0e7a;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
                .email-body {
                  padding: 20px;
                }
                .email-footer {
                  background-color: #ff0e7a;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="email">
                  <div class="email-header">
                    <h1>New Job Application</h1>
                  </div>
                  <div class="email-body">
                    <p>Welcome to Jumping Goose</p>
                    <h4>Details:</h4>
                    <p>Applied For: ${headline}</p>
                    <p>NAME: ${data?.name}</p>
                    <p>PHONE: ${data?.phone}</p>
                    <p>EMAIL: ${data?.email}</p>
                    <p>WEBSITE/PORTFOLIO: ${data?.portfolio}</p>
                    <p>LINKEDIN PROFILE: ${data?.linkedin}</p>
                    <p>Please check the dashboard for further information.</p>
                  </div>
                  <div class="email-footer">
                    <p>Don't reply to this mail.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;
};
