fetch("https://extreme-ip-lookup.com/json/")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    text = `
      *Visit To Website*
      Page: ${window.location.href}
      IP: ${data.query}
      Hostname: ${data.ipName}
      City: ${data.city}
      Region: ${data.region}
      Country: ${data.country}
      Org: ${data.org}
      Agent: ${navigator.userAgent}
      Referer: ${document.referrer}
      `;
    fetch(
      "https://api.telegram.org/bot602449923:AAEeHZ2MS4Bd8oQHHfgUrYPpMnVbztCtcxE/sendMessage",
      {
        method: "POST", // or 'PUT'
        body: JSON.stringify({
          chat_id: "507960755",
          text: text,
          parse_mode: "Markdown"
        }), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
  });
