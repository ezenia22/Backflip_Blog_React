// import { google, GoogleApis } from 'googleapis';

// import fs from 'fs';
// import path from 'path';
// import {fileURLToPath} from 'url';

// // GOOGLE DRIVE
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const CLIENT_ID = '614869479841-7bbkev3qvlumoj8tabnlqqqufdra46p6.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; 

// const REFRESH_TOKEN = '1//04DdIm67X_bZ3CgYIARAAGAQSNwF-L9IrJ3xhtDRIPjufQKig6w10RijsjKLuyP6svoPPI2ER6ihv5f7WGInPGoXy7RdpQkMuLNQ';

// const oauth2Client = new google.auth.OAuth2(    //initalize a authentication for the client Id,  client secret and URI
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );

// oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})  //set the credentials of the refresh token from the google's developer

// const drive = google.drive({
//   version: 'v3',
//   auth: oauth2Client
// })

// const filePath = path.join(__dirname, 'images/World Cup.png');

// // Upload File
// module.exports = {
//   uploadFile: async () => {
//   try {
//     const response = await drive.files.create({
//       requestBody: {
//         name: 'worldcup',
//         mimeType: 'image/png'
//       },
//       media: {
//         mimeType: 'image/png',
//         body: fs.createReadStream(filePath)
//       }
//     })

//     const url = `https://drive.google.com/file/d/${response.data.id}/view?usp=share_link`

//     const fileId = response.data.id;
//     await drive.permissions.create({
//       fileId: fileId,
//       requestBody: {
//         role: 'reader',
//         type: 'anyone'
//       }
//     })

//     const result = await drive.files.get({
//       fileId: fileId,
//       fields: 'webViewLink, webContentLink',
//     })

//     console.log(response.data);
//     console.log(result.data)

//   } catch (error) {
//     console.log(error.message)
//   }
// }
// }

// // uploadFile();

// // Delete File 
// async function deleteFile() {
//   try {
//     const response = await drive.files.delete({
//       fileId: '',
//     });
//     console.log(response.data, response.status);
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// // deleteFile();