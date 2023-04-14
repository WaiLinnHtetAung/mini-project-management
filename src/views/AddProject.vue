<template>
  <h3>Add Project</h3>
  <form @submit.prevent="submit">
    <label for="">Project Title</label>
    <input type="text" v-model="title">
    <label for="">Project Detail</label>
    <input type="text" v-model="detail">
    <button>Create</button>
  </form>
</template>

<script>
export default {
    data : () => ({
        title : '',
        detail : '',
    }),
    methods: {
        submit() {
            fetch('http://localhost:3000/projects', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    title: this.title,
                    detail: this.detail,
                    isDone: false
                })
            })
            .then(() => {
                this.$router.push('/')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    h3{
        margin-top: 5rem;
        padding-left: 10px;
        text-transform: uppercase;
    }

    form {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
    }

    label {
        display: block;
        color: #bbb;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 20px 0 10px 0;
    }

    input {
        padding: 10px;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 100%;
        box-sizing: border-box;
        color: rgb(74, 73, 73);
    }

    form button {
        display: block;
        margin: 20px auto 0;
        color: white;
        padding: 10px 14px ;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
        background: #00ce89;
        cursor: pointer;
    }
</style>