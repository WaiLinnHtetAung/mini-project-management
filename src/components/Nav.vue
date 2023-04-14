<template>
  <div>
    <button @click="filter('all')" :class="{active: currentStatus == 'all'}">All</button>
    <button @click="filter('complete')" :class="{active: currentStatus == 'complete'}">Complete</button>
    <button @click="filter('ongoing')" :class="{active: currentStatus == 'ongoing'}">Ongoing</button>
  </div>
</template>

<script>
export default {
    props: ['currentStatus'],
    methods: {
        filter(status) {
            this.$emit('filter', status);
        }
    }
}
</script>
<style scoped>
    div {
        margin: 0px 0px 15px 10px;
    }
    button {
        border: 0;
        padding: 3px 5px;
        margin: 0px ;
        background: #fff;
        margin-left: 5px;
        letter-spacing: 2px;
        font-size: .7rem;
        color: #bbb;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
    }
    .active {
        color: #000;
    }
</style>