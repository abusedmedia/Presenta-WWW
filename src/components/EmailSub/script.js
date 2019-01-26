import axios from 'axios'

export default {
  data () {
    return {
      cb: false,
      mountd: false,
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
      if (this.cb && this.isEmail) v = false
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
      this.email = ''
      this.submitbtn = 'Go ahead!'
    },
    send () {
      this.isError = false
      this.submitbtn = 'Submitting...'
      if (this.isEmail && this.cb) {
        var url = 'https://jsonplaceholder.typicode.com/posts'
        axios.post(url, {
          email: this.email
        })
          .then(response => {
            this.$emit('submitted')
            this.mountd = false
          })
          .catch(error => {
            this.retry()
            console.log(error)
          })
      }
    }
  }
}
