<template>
    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="輸入名稱" v-model="name" @keyup="enterDoAdd">
            <span class="input-group-append">
                <button class="btn btn-primary btn-sm" @click="doAdd">新增</button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            name: '',
        }
    },
    methods: {
        doAdd() {
            if (!this.name) {
                return alertify.error('名稱未輸入');
            }
            console.log(this.name);
        },
        enterDoAdd(e) {
            if (e.keyCode == 13 || e.which == 13) {
                this.doAdd();
            }
        }
    }
}
</script>