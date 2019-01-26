<template>
  <div class="overlay">
    <div class="form" :class="{in:mountd}">
      <h1>Hey! <br />This is PRESENTA!</h1>
      <h3>A presentation tool</h3>
      <p>Want to be notified about the beta release?</p>

      <p v-if="isError" class="error">There was an error, try again.</p>

      <input v-model="email" class="field" placeholder="Leave the email" type="text" />
      <button :disabled="dis" @click="send">{{submitbtn}}</button>
      
      
      <p class="notice">
          <input type="checkbox" v-model="cb" />
           I'm good leaving this email to receive communication related only to this tool.
      </p>
      <p class="notice">No Cookies were armed in this site</p>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.css" scoped></style>
