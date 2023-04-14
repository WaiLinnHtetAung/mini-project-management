<template>
  <div class="home">
    <Nav @filter="currentStatus=$event" :currentStatus="currentStatus" />
    <div v-for="(project, index) in filteredProjects" :key="index">
      <SingleProject :project="project" @delete="projectDeleted" @done="doneProject"></SingleProject>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import Nav from '../components/Nav.vue';
export default {
  name: 'HomeView',
  components:{SingleProject, Nav},
  data: () => ({
    projects : [],
    currentStatus: 'all',
  }),
  computed: {
    filteredProjects() {
      if(this.currentStatus == 'complete') {
        return this.projects.filter((project) => {
          return project.isDone;
        })
      } else if (this.currentStatus == 'ongoing') {
        return this.projects.filter((project) => {
          return !project.isDone;
        })
      } else {
        return this.projects;
      }
    }
  },
  methods: {
    projectDeleted(id) {
      this.projects = this.projects.filter( project => {
        return project.id != id;
      })
    },
    doneProject(id) {
      let donePj = this.projects.find((project) => {
          return project.id == id;
      })

      donePj.isDone = !donePj.isDone;
    }
  },
  mounted () {
    fetch('http://localhost:3000/projects')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.projects = data;
    })
    .catch((e) => {
      console.log(e.message);
    })
  }
}
</script>
