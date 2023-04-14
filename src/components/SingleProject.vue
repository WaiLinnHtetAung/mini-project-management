<template>
  <div class="project" :class="{done:project.isDone}">
    <div class="head-icon">
        <h3 @click="showDetail= !showDetail">{{project.title}}</h3>
        <div>
            <span @click="deleteProject"><i class="fa-solid fa-trash"></i></span>
            <router-link :to="{name: 'EditProject', params: {id: project.id}}"><span><i class="fa-solid fa-pen-to-square"></i></span></router-link>
            <span @click="completeProject"><i class="fa-solid fa-check"></i></span>
        </div>
    </div>
    <p v-if="showDetail">{{project.detail}}</p>
  </div>
</template>

<script>
export default {
    props:['project'],
    data: () => ({
        showDetail:false,
        api : "http://localhost:3000/projects/",
    }),

    methods: {
        deleteProject() {
            fetch(this.api+this.project.id, {method: "DELETE"})
            .then(() => {
                this.$emit("delete", this.project.id);
            })
            .catch((err) => {
                console.log(err);
            })
        },
        completeProject() {
            fetch(this.api+this.project.id, {
                method: "PATCH",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({isDone: !this.project.isDone})
            })
            .then(() => {
                this.$emit("done", this.project.id);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
    .project {
        background: #f2f2f2;
        padding: 20px;
        margin: 10px;
        border-radius: 8px;
        border-left: 6px solid crimson;
    }

    .done {
        border-left: 6px solid rgb(20, 220, 107);
    }

    h3 {
        color: indigo;
        display: inline-block;
        cursor: pointer;
    }

    .head-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        margin-left: 15px;
        cursor: pointer;
        color: #000;
    }

    span:hover {
        color: #777;
    }
</style>