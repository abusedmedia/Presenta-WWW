<template>
  <div class="overlay">
    <div class="form" :class="{in:mountd}">
      <p class="neg">
        <span>PRESENTA is currently in private-beta.</span>
      </p>
      <p>
        <span>You can request an invitation or just to be notified once it'll be publicy available.</span>
      </p>

      <p v-if="isError" class="error">There was an error, try again.</p>

      <input v-model="name" class="field first" placeholder="Leave your FULL name" type="text" />
      <input v-model="email" class="field" placeholder="and the email" type="email" />
      <button :disabled="dis" @click="send">{{submitbtn}}</button>
      
      
      <p class="notice">
          <Checkbox :val.sync="cb" />
           I'm good leaving this personal information to receive messages about this tool.
      </p>
      <p class="notice">
         <Checkbox :val.sync="cbt" /> I want to request a beta-test invitation
      </p>
      <p class="notice" v-if="cbt">
         <Checkbox :val.sync="cbi" /> You can write me in italian
      </p>
      <p class="sub notice">No Cookies were armed building this website, thus, no need to accept weird banners.</p>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.css" scoped></style>
