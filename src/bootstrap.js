window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.Vue = require('vue')

window.alertify = require('alertifyjs');