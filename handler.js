//exports.hello = (event, context, callback) => {
//    const request = require('request-promise-native');
//
//    const sendMessage = (message) => {
//      return request({
//        method: 'POST',
//        url: process.env.WEBHOOK_URL,
//        body: message,
//        json: true,
//      })
//        .then((body) => {
//          if (body === 'ok') {
//            return {};
//          } else {
//            throw new Error(body);
//          }
//        });
//    };
//
//    const processRecord = (record) => {
//      const subject = record.Sns.Subject;
//      const message = JSON.parse(record.Sns.Message);
//      return sendMessage({
//        text: subject,
//        attachments: [{
//          text: message.NewStateReason,
//          fields: [{
//            title: 'Time',
//            value: message.StateChangeTime,
//            short: true,
//          }, {
//            title: 'Alarm',
//            value: message.AlarmName,
//            short: true,
//          }, {
//            title: 'Account',
//            value: message.AWSAccountId,
//            short: true,
//          }, {
//            title: 'Region',
//            value: message.Region,
//            short: true,
//          }],
//        }],
//      });
//    };
//}




const https = require('https');

exports.hello = (event, context, callback) => {
  const payload = JSON.stringify({
    text: `Message sent by ${event.name} (${event.email}):\n ${event.message}`,
  });

  const options = {
    hostname: "hooks.slack.com",
    method: "POST",
    path: "/services/T013LG0HCGP/B013LPT2UGP/rQ0V1aSX0JmNhnK0a96d7wyZ",
  };

  const req = https.request(options,
      (res) => res.on("data", () => callback(null, "OK")))
  req.on("error", (error) => callback(JSON.stringify(error)));
  req.write(payload);
  req.end();
}


/////////////////////////////////////////////////////////////////////////////////

//const https = require('https');
//exports.hello = async (event) => {
//    let dataString = '';
//
//    const response = await new Promise((resolve, reject) => {
//        const req = https.get("https://pokeapi.co/api/v2/pokemon/ditto", function(res) {
//          res.on('data', chunk => {
//            dataString += chunk;
//          });
//          res.on('end', () => {
//            resolve({
//                statusCode: 200,
//                body: JSON.stringify(JSON.parse(dataString), null, 4)
//            });
//          });
//        });
//
//        req.on('error', (e) => {
//          reject({
//              statusCode: 500,
//              body: 'Something went wrong!'
//          });
//        });
//    });
//
//    return response;
//};


//const http = require('https');
//
//exports.hello = async (event, context) => {
//
//    return new Promise((resolve, reject) => {
//        const options = {
//            host: 'hooks.slack.com',
//            path: '/services/T013LG0HCGP/B013LPT2UGP/rQ0V1aSX0JmNhnK0a96d7wyZ',
//            port: 443,
//            method: 'PUT'
//        };
//
//        const req = http.request(options, (res) => {
//          resolve('Success');
//        });
//
//        req.on('error', (e) => {
//          reject(e.message);
//        });
//
//        // send the request
//        req.write('');
//        req.end();
//    });
//};





//'use strict';
//
//module.exports.hello = async event => {
//  return {
//    statusCode: 200,
//    body: JSON.stringify(
//      {
//        message: 'Go Serverless v1.0! Your function executed successfully!',
//        input: event,
//      },
//      null,
//      2
//    ),
//  };
//
//  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
//};

