import axios from 'axios'
import Checkbox from './../checkbox.vue'

export default {
  components: {
    Checkbox
  },
  data () {
    return {
      cb: false,
      cbi: false,
      cbt: false,
      mountd: false,
      name: '',
      email: '',
      isError: false,
      submitbtn: 'Go ahead!'
    }
  },
  mounted () {
    setTimeout(() => this.mountd = true, 100)
  },
  computed: {
    dis () {
      var v = true
      if (this.name !== '' && this.cb && this.isEmail) v = false
      return v
    },
    isEmail () {
      var patt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g
      return this.email.match(patt)
    }
  },
  methods: {
    retry () {
      this.isError = true
      this.name = ''
      this.email = ''
      this.submitbtn = 'Go ahead!'
    },
    send () {
      this.isError = false
      this.submitbtn = 'Submitting...'
      if (!this.dis) {
        axios.post(process.env.backendServiceUrl, {
          name: this.name,
          email: this.email,
          ita: this.cbi,
          beta: this.cbt,
          date: new Date()
        })
          .then(() => {
            this.$emit('submitted', { name: this.name })
            this.mountd = false
            this.submitbtn = 'GREAT!'
          })
          .catch(() => {
            this.retry()
          })
      }
    }
  }
}
