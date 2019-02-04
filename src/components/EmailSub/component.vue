<template>
  <div class="overlay">
    <div class="form" :class="{in:mountd}">
      <h1>Hey! <br />This is the home of <b>PRESENTA!</b></h1>
      <h3>A modern presentation tool</h3>
      <p>Want to ask for the <b>private-beta invitation</b> <br/>or to be <b>notified</b> when it'll be ready?</p>

      <p v-if="isError" class="error">There was an error, try again.</p>

      <input v-model="email" class="field" placeholder="Leave the email" type="email" />
      <button :disabled="dis" @click="send">{{submitbtn}}</button>
      
      
      <p class="notice">
          <Checkbox :val.sync="cb" />
           I'm good leaving this email to receive messages about this tool.
      </p>
      <p class="sub notice">No Cookies were armed building this website, thus, no need to accept weird banners.</p>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.css" scoped></style>
