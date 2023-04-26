<template>
<h1>Posts</h1>

<h2> {{posts}}</h2>
<li v-for="post in posts" :key="post">
	<h2>post.title</h2>
	<img src={{ post.image }}>
	<p>{{ post.body }}
	</p>
</li>

</template>
<script>

import $ from 'jquery';
import axios from 'axios'

export default {
    data: function() {
    return {
      posts: null
    };
  },
    methods: {
    getData: function () {
      $.getJSON("https://raw.githubusercontent.com/chradil/natl-epics/main/posts.json", function (data) {
        this.posts = data
        console.log(this.posts)
      })

    }
  },
  mounted () {

    axios
      .get("https://raw.githubusercontent.com/chradil/natl-epics/main/posts.json")
      .then(response => (this.posts = response.data))
  
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