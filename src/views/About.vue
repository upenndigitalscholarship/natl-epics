<template>
<div v-for="section in sections" :key="section.id">
	<h1> {{section.title}}</h1>
	<div v-html="section.body"> </div>
</div>
<br><br>
</template>
<script>

import axios from 'axios'

export default {
    data: function() {
    return {
      sections: {}
    };
  },
  created () {

    axios
      .get("https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/about.json")
      .then(response => (this.sections = response.data.sections))
      .catch(err => console.error(err));
  
    }
}
</script>