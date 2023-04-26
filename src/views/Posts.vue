<template>
<div>
<h1>Posts</h1>

<h2>{{posts[0].title}}</h2>
<img :src="posts[0].image">
<p v-html="posts[0].body"></p>

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
      .then(response => (this.posts = response.data))
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