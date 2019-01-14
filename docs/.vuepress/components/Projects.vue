<template>
  <div>
    <div>
      <h2>Product</h2>
      <div v-for="product in products">
        <h3>
          <router-link :to="product.url">{{ product.name }}</router-link>
        </h3>

        <p>{{ product.description }}</p>
      </div>
    </div>
    <div>
      <h2>Open Source</h2>
      <div v-for="repo in repos">
        <h3>
          <router-link :to="repo.html_url">{{ repo.name }}</router-link>
        </h3>

        <p>{{ repo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repos: null,
      products: [
        {
          name: "Moxtra Chrome Extension for Gmail",
          url:
            "https://chrome.google.com/webstore/detail/moxtra-for-gmail/nilmkkfaijpljlpkpmpibckakhdfefgj",
          description:
            "Used Javascript, React, REST API, Node.js, Gulp to build Chrome extension applications that embed Moxtra chat/meeting capabilities into Gmail and Calendar."
        },
        {
          name: "Moxtra Chrome Extension for Google Calendar",
          url:
            "https://chrome.google.com/webstore/detail/moxtra-for-google-calenda/ljfbndeekfdbhcmnmiamfllcmeahdfmc?utm_source=chrome-ntp-icon",
          description:
            "Used Javascript, React, REST API to build Chrome extension applications that embed Moxtra meeting scheduling capabilities into Google Calendar."
        },
        {
          name: "Moxtra Outlook Add-in",
          url: "https://store.office.com/en-us/app.aspx?assetid=WA104380433",
          description:
            "Cooporated with Microsoft Office API, Javascript, and Moxtra REST API to build mailbox and appointment calendar integrations to allow users to collaborate with Moxtra contacts."
        },
        {
          name: "Moxtra Trello Power-up",
          url: "http://moxtra.com/resource/trello_moxtra_power_up/",
          description:
            "Integrate Moxtra features into Trello board using Javascript and REST APIs, providing users capability to collaborate with Moxtra users from within Trello."
        },
        {
          name: "iTongue",
          url: "https://itunes.apple.com/us/app/itongue/id998044356",
          description:
            "Redesign iTongue 1.0 architecture and experience from ground up and improves general useability and user experience."
        }
      ]
    };
  },
  mounted() {
    axios
      .get(
        "https://api.github.com/users/tonyxu-io/repos?type=owner&sort=updated"
      )
      .then(response => {
        this.repos = response.data;
      });
  }
};
</script>