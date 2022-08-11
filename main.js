require('dotenv').config();
const jenkins = require('jenkins')({ baseUrl: process.env.BASEURL, crumbIssuer: true });
jenkins.info(function(err, data) {
    if (err) throw err;
   
    console.log('info', data);
});

jenkins.job.config('test', function(err, data) {
    if (err) throw err;
   
    console.log('xml', data);
});