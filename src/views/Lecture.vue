<template>
<div>
<h1>Lectures</h1>

<div v-for="lecture in lectures" :key="lecture.id">
    <a v-bind:href="lecture.link">{{ lecture.name }}</a>
	<br>
</div>

</div>
</template>

<script>

import axios from 'axios'

export default {
    data: function() {
    return {
      lectures: {}
    };
  },
  created () {

    axios
      .get("https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/lectures.json")
      .then(response => (this.lectures = response.data.lectures))
      .catch(err => console.error(err));
  
    }
}
</script>
<style>
blockquote{
	margin-left:8em;
	margin-right:8em;
}
.post{
	padding-bottom:2em;
	padding-top:2em;
	margin-bottom:5em;
	background-color:lightgray;
}
img {
	width:60%; 
	float:center;
	display: block;
	margin-left:auto; 
	margin-right:auto
}
</style>