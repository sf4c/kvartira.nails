// Imported frameworks
import * as fs from 'fs';               // fs
import { spawn } from 'child_process';  // child_process
import express from 'express';          // express
import bodyParser from 'body-parser';   // body-parser
import cors from 'cors';                // cors
import mysql from 'mysql';              // mysql
import syncMysql from 'sync-mysql';     // sync-mysql

// Imported modules
import cfg from './config.js';          // config

const app = express();
const PORT = app.listen(5000).address().port;

// CORS
const clientAddr = `http://localhost:3000`;
app.use(cors({ origin: [ clientAddr ] }));

// Useful
app.use(express.static("public"));
app.use(bodyParser.urlencoded( { extended: true } ));
app.set('view engine', 'ejs');
app.use(express.json());

// Functions
const sql = (query) => {
  const conn = new syncMysql(cfg);
  const result = conn.query(query);

  return result;
};
const response = async (res, data) => {
  await res.write(JSON.stringify(data));
  res.end();
};
// Method: GET

// Method: POST
app.post("/getUsers", (req, res) => {
  const request = req.body;
  let users = sql(`SELECT * FROM users`);
  response(res, users);
});
app.post("/getUserByID", (req, res) => {
  const request = req.body;
  let user = sql(`SELECT * FROM users WHERE id = "${request['id']}"`)[0];
  response(res, user);
});
app.post("/getMasters", (req, res) => {
  const request = req.body;
  let masters = sql(`SELECT * FROM masters`);
  response(res, masters);
});
app.post("/getMasterByID", (req, res) => {
  const request = req.body;
  let master = sql(`SELECT * FROM masters WHERE id = "${request['id']}"`)[0];
  response(res, master);
});
app.post("/getServices", (req, res) => {
  const request = req.body;
  let services = sql(`SELECT * FROM services`);
  response(res, services);
});
app.post("/getServiceByID", (req, res) => {
  const request = req.body;
  let service = sql(`SELECT * FROM services WHERE id = "${request['id']}"`)[0];
  response(res, service);
});
app.post("/getWorks", (req, res) => {
  const request = req.body;
  let works = sql(`SELECT * FROM works`);
  response(res, works);
});
app.post("/getWorkByID", (req, res) => {
  const request = req.body;
  let work = sql(`SELECT * FROM works WHERE id = "${request['id']}"`)[0];
  response(res, work);
});
// app.post("/mailCheck", (req, res) => {
//   const request = req.body;
//   let i = -1;
//   while (true) {
//     i++;
//     let users = sql(`SELECT * FROM users`);
//     let usersLenght = Number(users.length);
//     if (usersLenght != 0) {
//       if (users[i]['mail'] === request['mail']) {
//         response(res, `err: 1`); // match found with 'mail'
//         break;
//       } else {
//         if (i == usersLenght - 1 && users[i]['mail'] !== request['mail']) {
//           response(res, `successful`); // successful
//           break;
//         }
//       }
//     } else {
//       response(res, `successful`); // successful
//       break;
//     }
//   }
// });
// app.post("/registration", (req, res) => {
//   const request = req.body;
//   let i = -1;
//   while (true) {
//     i++;
//     let users = sql(`SELECT * FROM users`);
//     let usersLenght = Number(users.length);
//     if (usersLenght != 0) {
//       if (users[i]['mail'] === request['mail']) {
//         response(res, `err: 1`); // match found with 'mail'
//         break;
//       } else {
//         if (i == usersLenght - 1 && users[i]['mail'] !== request['mail']) {
//           sql(`
//             INSERT users(avatar, mail, surname, name, password, isAdmin, isManicureMaster, isPedicureMaster, description, experience, workingHours) 
//             VALUES ('', '${request['mail']}', '${request['surname']}', '${request['name']}', '${request['password']}', 'Нет', 'Нет', 'Нет', '', '', '');
//           `);
//           response(res, `successful`); // successful
//           break;
//         }
//       }
//     } else {
//       sql(`
//         INSERT users(avatar, mail, surname, name, password, isAdmin, isManicureMaster, isPedicureMaster, description, experience, workingHours) 
//         VALUES ('', '${request['mail']}', '${request['surname']}', '${request['name']}', '${request['password']}', 'Нет', 'Нет', 'Нет', '', '', '');
//       `);
//       response(res, `successful`); // successful
//       break;
//     }
//   }
// });
// app.post("/authorization", (req, res) => {
//   const request = req.body;
//   let i = -1;
//   while (true) {
//     i++;
//     let users = sql(`SELECT * FROM users`);
//     let usersLenght = Number(users.length);
//     if (usersLenght != 0) {
//       if (i == usersLenght - 1 && users[i]['mail'] !== request['mail']) {
//         response(res, `err: 1`); // account does not exist
//         break;
//       } else {
//         if (users[i]['mail'] === request['mail']) {
//           if (users[i]['password'] === request['password']) {
//             let currentUserIsAdmin = sql(`SELECT isAdmin FROM users WHERE mail = "${request['mail']}"`)[0]['isAdmin'];
//             let currentUserIsManicureMaster = sql(`SELECT isManicureMaster FROM users WHERE mail = "${request['mail']}"`)[0]['isManicureMaster'];
//             let currentUserIsPedicureMaster = sql(`SELECT isPedicureMaster FROM users WHERE mail = "${request['mail']}"`)[0]['isPedicureMaster'];
//             if (currentUserIsAdmin === "Да") {
//               let currentUserID = sql(`SELECT id FROM users WHERE mail = "${request['mail']}"`);
//               response(res, {'status': 'admin', 'id': currentUserID[0]['id']}); // successful
//             } else if (currentUserIsManicureMaster == "Да") {
//               let currentUserID = sql(`SELECT id FROM users WHERE mail = "${request['mail']}"`);
//               response(res, {'status': 'master', 'id': currentUserID[0]['id']}); // successful
//             } else if (currentUserIsPedicureMaster == "Да") {
//               let currentUserID = sql(`SELECT id FROM users WHERE mail = "${request['mail']}"`);
//               response(res, {'status': 'master', 'id': currentUserID[0]['id']}); // successful
//             } else {
//               let currentUserID = sql(`SELECT id FROM users WHERE mail = "${request['mail']}"`);
//               response(res, {'status': 'user', 'id': currentUserID[0]['id']}); // successful
//             }
//           } else {
//             response(res, `err: 2`); // incorrect password
//           }
//           break;
//         }
//       }
//     } else {
//       response(res, `err: 1`); // account does not exist
//       break;
//     }
//   }
// });
// app.post("/changeUserData", (req, res) => {
//   const request = req.body;
  
//   sql(`
//     UPDATE users
//     SET avatar = "${request['avatar']}", surname = "${request['surname']}", name = "${request['name']}", description = "${request['description']}", experience = "${request['experience']}", workingHours = "${request['workingHours']}"
//     WHERE id = "${request['id']}";
//   `);
// });