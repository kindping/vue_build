<template>
    <div class="table-responsive">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>功能</th>
                    <th>名稱</th>
                    <th>性別</th>
                    <th>年齡</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>
                        <button class="btn btn-primary btn-sm" @click="setIndex(index)"><i class="fas fa-edit"></i> 編輯</button>
                        <button class="btn btn-danger btn-sm" @click="removeIndex(index)"><i class="far fa-trash-alt"></i> 刪除</button>
                    </td>
                    <td>Name</td>
                    <td>Sex</td>
                    <td>Age</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            items: [],
        }
    }
}
</script>