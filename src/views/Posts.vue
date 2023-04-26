<template>
<div>
<h1>Posts</h1>

<div v-for="post in posts" :key="post.id">
	<h2> {{post.title}}</h2>
	<h3> {{post.date}}</h3>
	<img :src="post.image">
	<p v-html="post.body"></p>
	<hr>
</div>

</div>
</template>

<script>

import axios from 'axios'

export default {
    data: function() {
    return {
      posts: {}
    };
  },
  created () {

    axios
      .get("https://raw.githubusercontent.com/chradil/natl-epics/main/posts.json")
      .then(response => (this.posts = response.data.posts))
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