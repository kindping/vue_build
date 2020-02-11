require('./bootstrap')

import StudentNameList from './components/StudentNameList'
import AddStudent from './components/AddStudent'
import StudentTable from './components/StudentTable'
import EditListName from './components/EditListName'

new Vue({
    el: '#app',
    components: { StudentNameList, AddStudent, StudentTable, EditListName },
    data() {
        return {
            title: 'Student List',
            editIndex: -1,
            editData: {},
            mode: 'list',
        }
    },
    methods: {
        doAdd(name) {
            this.$refs.table.doAdd(name);
        },
        toList() {
            this.mode = 'list';
        },
        toEdit(index, data) {
            this.mode = 'edit';
            this.editIndex = index;
            this.editData = data;
            this.$refs.editListName.load(data.name);
            this.$refs.studentTable.load(data.students);
        },
        doSaveName(name) {
            this.editData.name = name;
            this.$refs.table.update(this.editIndex, this.editData);
            alertify.success('儲存完成');
        },
        doSaveStudents(students) {
            this.editData.students = students;
            this.$refs.table.update(this.editIndex, this.editData);
            alertify.success('儲存完成');
        }
    }
})