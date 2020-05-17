/*
      Licensed Materials - Property of IBM
      © IBM Corp. 2019
*/

// import libraries
var apic = require('local://isp/policy/apim.custom.js');
var url = require ('urlopen'); 

 // get properties values
var cost = apic.getPolicyProperty('Cost');
var service = apic.getPolicyProperty('Service');


/* get client and plan details
    var plan_id = apic.getPolicyProperty('plan.id');
    var plan_name = apic.getPolicyProperty('plan.name');
    var app_id = apic.getPolicyProperty('client.app.id');
*/

// prepare the service call
var options = {
    target:  service,
    method:  'post',
    contentType: 'application/json',
    timeout: 60,
    data: {'amount' : cost}
};
 
// pass otherwise return 402 error
url.open(options, function (error, response) { 
    if(response.statusCode == 402){
        apic.error('Payment Required', 402, 'No sufficient amount', `Charge your account with minimum of ${cost}`)
    }     
 });

  