require('./bootstrap')

import StudentNameList from './components/StudentNameList'
import AddStudent from './components/AddStudent'

new Vue({
    el: '#app',
    components: { StudentNameList, AddStudent },
    data() {
        return {
            title: 'Student List',
        }
    },
    methods: {
        doAdd(name) {
            this.$refs.table.doAdd(name);
        }
    }
})