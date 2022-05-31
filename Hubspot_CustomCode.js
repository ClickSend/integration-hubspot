const hubspot = require('@hubspot/api-client');
var axios = require('axios');

exports.main = async (event, callback) => {
  
  try {
    let firstName;
    let phone;
    let lastName;
    const username = process.env.CSUSERNAME; // Your CS username via secret
    const key = process.env.CSKEY; /// Your CS apikey via secret

	const result = Buffer.from(username+":"+key).toString('base64');

    const hubspotClient = new hubspot.Client({ apiKey: process.env.HPKEY });
    const ApiResponse = await hubspotClient.crm.contacts.basicApi.getById(
      event.object.objectId,
      ['phone', 'firstname', 'lastname']
    );
    phone = ApiResponse.body.properties.phone;
    firstName = (ApiResponse.body.properties.firstname!=undefined) ?  ApiResponse.body.properties.firstname : '';
    lastName = (ApiResponse.body.properties.lastname!=undefined)?  ApiResponse.body.properties.lastname : ''; 
    // You can GET more fields such as company, email, using the Husbspot API

	const message = 'Hi '+firstName+ ' '+'Hubspottesting'; // Add a custom message here

    var data = JSON.stringify({
    "messages": [
    {
      "body": message,
      "to": phone,
      "from": "",   // Add your Sender ID (Optional)
      "source":"Hubspot"
    }
				]
	});

	var config = {
	method: 'post',
	url: 'https://rest.clicksend.com/v3/sms/send',
	headers: { 
		'Content-Type': 'application/json', 
		'Authorization': 'Basic '+result
	},
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  } catch (err) {
    throw err;
  }
  const email = event.inputFields['email'];
  const phone = event.inputFields['phone'];

  callback({
    outputFields: {
      email: email,
      phone: phone,
    },
  });
};
