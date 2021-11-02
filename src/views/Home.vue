<template>
  <div id="map" />
  <div id="info">
  <i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>
    <p style="margin-left:1em; margin-right:1em"><b>Nationalizing Epics</b> is developing in parallel with <i>National Epics</i>, a collaborative work of c. 83 or 84 chapters, to be published by Oxford University Press (UK). While <i>National Epics</i> suggests a stabilized outcome, a multi-volume book with reference value, <b>Nationalizing Epics</b> evokes the process of getting there, acknowledging that the nature and dynamics of nationalism, and the texts that serve or subvert it, never rest. And while most such large-scale projects develop behind closed doors, <b>Nationalizing Epics</b> aims to share resources and air critical issues along the way.</p>
    <p style="margin-left:1em; margin-right:1em"> <i>National Epics</i> will run from Albania and Algeria to Vietnam and Wales, an alphabetical organization that reproduces the sovereign, Olympian starkness of nationalism. Each <i>National Epics</i> author also contributes to <b>Nationalizing Epics</b>, initially by briefly discussing how a designated territorial space shapes or is shaped by "epical" texts that tell its story to the world. Collectively and cumulatively, we will help augment the emergent disciplinary field known as critical nationalism studies.</p>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
import { createApp, defineComponent, ref, nextTick } from "vue";
import MyPopup from "@/components/MyPopup.vue";

export default {
    components: {
    },
  setup() {
    const title = ref("Unchanged Popup Title");
    onMounted(() => {
      mapboxgl.accessToken = "pk.eyJ1IjoiY2hyYWRpbCIsImEiOiJja28wdnN0ZWMwZ3V3Mndta2Q2bm81bGtjIn0.Rt-7EwN5ftoTjzPYGhJl4Q";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
      });

      map.on("load", () => {
        // Here we want to load a layer
        map.addSource("pol", {
          type: "geojson",
          data:
            "https://raw.githubusercontent.com/chradil/natl-epics/main/NationalizingEpics.json"
        });
        map.addLayer({
          id: "pol-fill",
          type: "fill",
          source: "pol",
          paint: {
            "fill-color": ["get","color"]
          }
        });
        // Here we want to setup the dropdown
        map.on("click", "pol-fill", function (e) {
        console.log(e);
        let country = e.features[0].properties;
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<h1><br><br>' + country.name + '</h1>' + '<br>' +'<img width="90%" style="float:center; display: block; margin-left:auto; margin-right:auto" src="'+ country.image +'">' + '<br><p>' + country.description + '</p><p>' + country.author + '<br>' + country.email + '<br>' + country.website + '</p>')            
            .addTo(map);
          const MyNewPopup = defineComponent({
            extends: MyPopup,
            setup() {
              return { title };
            },
          });
          nextTick(() => {
            createApp(MyNewPopup).mount("#popup-content");
          });
        });
      });
    });
    return { title };
  },
};
</script>

<style>
#map {
  height: 90vh;
}
#info{
  border: 2px solid gray;
  top:75px;
  left:2vh;
  height:30px;
  width:25px;
  position:absolute;
  background-color:white;
  opacity:0.8;
  overflow-y:hidden;
  padding:10px;
}
#info:hover{
  height:80vh;
  width:35vw;
  overflow-y:auto;
}

.mapboxgl-popup-content{
  padding:2em;
  overflow-y:auto !important;

}
.mapboxgl-popup{
    transform:none !important;
    max-width:40vw !important;
    opacity: 0.8 !important;
     top: 0px;
    left: 60vw;
    right:0px;
    bottom:0px;
    position:relative;
    height:90vh;
    background-color:white;
    overflow-y:auto !important;
    z-index:10;
}
.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-center .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-right .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip, 
.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip{
    display:none !important;
}

h1{
  text-align:center;

}

@media screen and (max-width: 700px) {
#info{
  border: 2px solid gray;
  top:120px;
  left:2vh;
  height:30px;
  width:25px;
  position:absolute;
  background-color:white;
  opacity:0.8;
  overflow-y:clip;
  padding:10px;
}

p, ul {
  margin-left:1em;
  margin-right:1em;

}
}
</style>