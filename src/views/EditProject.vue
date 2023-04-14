<template>
  <h3>Edit Project</h3>
  <form @submit.prevent="submit">
    <label for="">Project Title</label>
    <input type="text" v-model="title">
    <label for="">Project Detail</label>
    <input type="text" v-model="detail">
    <button>Update</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data : () => ({
        title : '',
        detail : '',
    }),
    methods: {
        submit() {
            fetch('http://localhost:3000/projects/'+this.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.title,
                    detail: this.detail
                })
            })
            .then(() => {
                this.$router.push('/');
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects/'+this.id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.title = data.title;
            this.detail = data.detail;
        })
        .catch((err) => {
            console.log(err)
        })
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
        color: rgb(32, 30, 30);
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