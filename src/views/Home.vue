<template>
  <div id="map" />
  <div id="info">
  <i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>
    <p style="margin-left:1em; margin-right:1em"><b>Nationalepics.com</b> is developing in parallel with <i>National Epics</i>, a collaborative work of c. 83 or 84 chapters, to be published by Oxford University Press (UK) and edited by <a href="https://www.english.upenn.edu/people/david-wallace" target="_blank">David Wallace</a>. While <i>National Epics</i> suggests a stabilized outcome, a multi-volume book with reference value, <b>nationalepics.com</b> evokes the process of getting there, acknowledging that the nature and dynamics of nationalism, and the texts that serve or subvert it, never rest. And while most such large-scale projects develop behind closed doors, <b>nationalepics.com</b> aims to share resources and air critical issues along the way.</p>
    <p style="margin-left:1em; margin-right:1em"> <i>National Epics</i> will run from Albania and Algeria to Vietnam and Wales, an alphabetical organization that reproduces the sovereign, Olympian starkness of nationalism. Each <i>National Epics</i> author also contributes to <b>nationalepics.com</b>, initially by briefly discussing how a designated territorial space shapes or is shaped by "epical" texts that tell its story to the world. Collectively and cumulatively, we will help augment the emergent disciplinary field known as critical nationalism studies.</p>
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
        maxBounds: [
[-170, -75], // Southwest coordinates
[180, 85] // Northeast coordinates
]
      });

      map.on("load", () => {

      map.loadImage(
      'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
      (error, image) => {
      if (error) throw error;
      map.addImage('custom-marker', image);
      })

      map.setLayoutProperty('place-islands', 'text-field', [
          'format',
          ['get', 'name_en'],
            { 'font-scale': 1 }
            ])

      //look for label layer id
        const layers = map.getStyle().layers;
        console.log(layers);
        // Find the index of the first symbol layer in the map style.
        let firstSymbolId;
        for (const layer of layers) {
          if (layer.type === 'symbol') {
            firstSymbolId = layer.id;
            break;
          }
        }

        // Here we want to load a layer
        map.addSource("pol", {
          type: "geojson",
          data:
            "https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/NationalizingEpics.json"
        });

        //add source layer for islands that are too small to see
        map.addSource('points', {
          'type': 'geojson',
          'data': {
          'type': 'FeatureCollection',
          'features': [

              {
                'type': 'Feature',
                'geometry': {
                'type': 'Point',
                'coordinates': [
                -61.004920,14.636340
                 ]
                },
                'properties': {
                'title': 'Martinique',
                "color": "#FF5733",
        "name": "Martinique",
        "author": "Myriam Moïse (University of the West Indies, Mona, Jamaica)",
        "email": "myriam.moise@fulbrightmail.org",
        "website": "https://www.caribbeanstudiesassociation.org/myriam-moise/",
        "image": "https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/images/Martinique.png",
        "description": "The island of Martinique (Martinican Matinik or Matnik) lies directly north of St Lucia and (further south) Trinidad. As a départemente of France, it is a special territory of the European union, and its currency is the euro. Almost everyone on the island speaks French and Martinican creole; the speaking of Kalinago, an Arawakan language, faded in the early twentieth century under intense colonialist pressure. Three of the most influential anti-colonialist writers of the region (or of any region) emerged from Martinique: Aimé Césaire (1913-2008), Franz Fanon (1925-1961), and Édouard Glissant (1928-2011). Texts such as Aimé Césaire's Cahier d'un retour au pays natal, (1939) and Fanon's The Wretched of the Earth (1961), and also the work of Glissant, contribute to and draw from the movement of négritude, which was also shaped and documented by women writers. Jeanne Nardal (1900-1993) and Paulette Nardal (1896-1985), theorized the movement and laid important connections with the Harlem Renaissance; Suzanne Césaire edited Tropiques, the most influential Francophone Caribbean journal. Édouard Glissant was shortlisted for the Noble Prize in 1992, when it was awarded an epical poet from the island fifty miles to the south: Derek Walcott (see 'St Lucia' chapter). Many major writers from Martinique were drawn to contemplation of wide, epical spaces: Glissant developed a notion of Antillanité, evoking a space stretching to Latin America, whereas Aimé Césaire emphasized African cathections. Landscapes of Martinican space remain of vital concern today, as writers ponder relations between poetry and ecology in light of what is now a distinguished, and highly influential, literary tradition."
                }
              },
              {
                'type': 'Feature',
                'geometry': {
                'type': 'Point',
                'coordinates': [-60.981111,13.906608]
                },
                'properties': {
                  'title': 'Saint Lucia',
                  "color": "#8dd3c7",
        "name": "St. Lucia",
        "author": "Antonia MacDonald (St George's University, Grenada)",
        "email": "AMacDona@sgu.edu",
        "website":"https://www.sgu.edu/research/sgu-research/antonia-macdonald-phd/",
        "image": "https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/images/stlucia.jpg",
        "caption": "the Titon mountains, St Lucia",
        "description": "In this chapter, I establish St. Lucia’s national epic as its story of coming into artistic being in the face of innumerable colonial setbacks. At the heart of this exploration is a calibration of epicity that is the sum of the efforts of the poet and playwright, Derek Walcott; the dramatist, Roderick Walcott; the painter, Dunstan St. Omer; and the novelist, Garth St. Omer.  The creative activities of this quartet of St. Lucian artists go beyond the literary. Accordingly, my focus is on the wide-ranging artistic endeavors of these four men as they brought St. Lucia’s social, cultural, and natural landscape into focus. I argue that in their creative processes, they repurposed the topoi of the epic to suit an emergent national imaginary. Drawing inspiration from the island as muse—the land, the sea and the people—these Creatives harmonized a praisesong of their island.  Their polyvocal composition not only resonated deeply with a local audience, but also allowed St. Lucia—dubbed ‘Helen of the West’ for its incomparable beauty—to gain international acclaim, and to partake of the epic grandeur of the famed Helen of Troy. Sampling the pre-Independence creative works of this quartet, the chapter compares the strengths and successes of the different genres within which they were working.  Moreover, I explore how, in entering into aesthetic conversation with each other, the Walcott brothers and the St. Omer cousins were consciously and unconsciously theorizing the contribution of the artist to national history and values. I conclude by showing how these men, all active members of the now-defunct St. Lucia Arts Guild, formed a sustaining community that allowed for continued artistic growth and the propagation of deep intertextual influences.  Their legacies continue to enrich the island’s creative enterprises and allow for the ongoing composition of a national epic."
                }
              },
        {
                'type': 'Feature',
                'geometry': {
                'type': 'Point',
                'coordinates': [ -61.249901,10.459993]
                },
                'properties': {
                  'title': 'Trinidad & Tobago',
                  "color": "#fdb462",
        "name": "Trinidad and Tobago",
        "author": "Geraldine Skeete (UWI St Augustine, Trinidad & Tobago)",
        "email": "Geraldine.Skeete@sta.uwi.edu",
        "website":"https://sta.uwi.edu/fhe/dlcc/dr-geraldine-skeete",
        "image": "https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/images/trinidad.jpg",
        "caption": "Michael Goldberg Collection, The Alma Jordan Library, The University of the West Indies",
        "description": "The twin-island nation Trinidad and Tobago achieved independence from British colonial rule in 1962 and became a Republic in 1976.  Although small in geographical size, the country almost paradoxically requires the prefix “multi-” as a descriptor of its racial, ethnic, cultural, religious, and linguistic diversity due to the legacies of slavery, indentureship, and the migration of peoples from Europe, Asia, other Caribbean islands, and regions of the Americas to its shores. The southernmost island in the Caribbean, and just seven miles from Venezuela, Trinidad’s demographic trends continue to be influenced by this South American country. Home to the pitch lake, one of the seven wonders of the world, re-discovered by Sir Walter Raleigh in 1595 and immortalized, too, in the title of Trinidadian Alfred H. Mendes’s novel Pitch Lake (1934), Trinidad relies more on its petrochemicals than its tourism industry-- unlike Tobago and most of its Caribbean neighbors. In addition, there is a complex economic and sociopolitical history of having changed hands among the Spanish, French, and British during the days of European colonization—with Tobago also having experienced such attempts by the Swedes and the Dutch. Therefore, the islands have since the days of colonialism and political independence been charting and celebrating their own unique sense of national identities and forms of artistic expression even amid the throes of racism and racial politics, classism, colorism, neocolonialism, and other isms and schisms that are legacies of the past.  Its creative writers—emerging, contemporary, and canonical— among them the late Trinidad-born Nobel Laureate V.S Naipaul, have variously represented the triumphs and failures of these pre- and postcolonial conditions and environments in ‘epic’ literatures—in prose, poetic, and dramatic forms—which have contributed to the canonization of both the Trinidad and Tobago and Caribbean literary traditions."
                }
              },
              {
                'type': 'Feature',
                'geometry': {
                'type': 'Point',
                'coordinates': [ -24.65394737214001,
            16.527409253907194
            ]
                },
                'properties': {
                  'title': 'Cape Verde',
                  "color": "#fdb462",
        "name": "Cape Verde",
        "author": "Simone Caputo Gomes (Universidade de São Paulo (USP), Brazil)",
        "email": "simonecaputog@gmail.com",
        "website":"https://dlcv.fflch.usp.br/node/570",
        "image": "https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/images/cape-verde.jpeg",
        "caption": "",
        "description": "Cape Verde, a small insular country of Sub-Saharan Africa, has seen literary production of singularly epic pedigree, featuring texts which emerge prior to the colony's independence from Portugal in 1975, and then postcolonial texts that carry forward the Cape Verdean national narrative. Before 1975, two authors stood out before prolonging their achievement post-independence: Corsino Fortes (1933-2015), who published Pão & fonema in 1974, followed by Árvore & tambor (1986) and Pedras de sol & substância (2001); and the neurosurgeon and epical poet Timóteo Tio Tiofe (heteronym of João Manuel Varela, neurosurgeon, writer, and epical poet, 1937-2007). The mosaic of this epic production also sees Kaká Barboza, Mário Lúcio Sousa, Nzé di Sant'y Águ (pseudo-heteronym of José Luís Hopffer Almada), Danny Spínola and José Luiz Tavares, engaged in reconstruction exercises, employing diverse aesthetic effects to evoke the genesis of the islands and the ruins of a history still insufficiently narrated. The poets re-enact, through memory, the drama of a paradise surrounded by Atlantic waters, but buffeted by prolonged droughts, a situation aggravated by two factors: the agricultural tradition inherited from the Portuguese colonizer and neglect by the colonial administration over 500 years, expanding tragic-telluric dimensions into historical tragedy. My account focusses chiefly on the great Cape Verdean epic, told both in Portuguese and native language: the poetic trilogy of Corsino Fortes, collected as A cabeça calva de deus (2001). This work, fundamental in representing the colony's struggle for freedom in the midst of the Salazar dictatorship, its national construction and consolidation, covers three key moments in Cape Verdean history: pre-independence, the ‘zero hour’ (i.e., independence), and post-independence. This work, honoring the Cape Verdean people, their heroes and cultural foundations, provides an excellent basis for understanding the reverberations of nationalism in Cape Verdean literature within the archipelago and in its diaspora."
                }
              },
        {
                'type': 'Feature',
                'geometry': {
                'type': 'Point',
                'coordinates': [-59.646240112791, 13.28500245774]
                },
                'properties': {
                  'title': 'Barbados',
                  "color": "#fdb462",
        "name": "Barbados",
        "author": "J. Dillon Brown (Washington University in St Louis)",
        "email": "jdbrown@wustl.edu",
        "website":"https://artsci.wustl.edu/faculty-staff/j-dillon-brown",
        "image": "https://raw.githubusercontent.com/upenndigitalscholarship/natl-epics/main/images/barbados.jpg",
        "caption": "",
        "description": "Barbados is the only Caribbean island to have been subjected to unbroken English rule from the first moment of its colonization.  This unusually stable political relationship, stretching from 1627 to flag independence in 1966, led to Barbados thinking of itself, often proudly, as ‘Little England,’ a self-identification that became increasingly fraught as anti-colonial nationalist sentiment gained momentum beginning in the 1930s.  Barbados also played a key role in the mid-century West Indies Federation (1958-1962), providing the first and only Prime Minister, Grantley Adams, for that short-lived experiment in regional-national political autonomy.  Caught thus between admiration for and abhorrence of the consequences of English rule, and between a sense of regional solidarity and its own individual island pride, Barbados represents a complex case study of national identity formation forged amidst the pressures of race, class, and shifting colonial power.  The complexity of narrating the Barbadian nation registers in the widely divergent strategies adopted by some of the island’s most internationally prominent authors, including Kamau Brathwaite, Austin Clarke, and George Lamming.  If Brathwaite strove to root island identity in the reconstitution of transatlantic links with Africa, Clarke turned to a corrosive exilic satire of colonial life, while Lamming sought to model an open-ended, but tortuously negotiated unity of liberated individual consciousnesses. More contemporary cultural phenomena like popular music and television – always under the shadow of the United States’ regional hegemony – can also be seen to register the difficulties and paradoxes that continue to inflect efforts to articulate a recognizably Bajan identity amidst the clashing, inter-imperial currents that structure the history and culture of this small, but passionately self-sovereign island nation."
                }
              }
          ]
        }
      });
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        "minzoom":1,
        'layout':{
          "icon-image":"custom-marker",
          'text-field': ['get', 'title'],
          'text-font': [
            'Open Sans Semibold',
            'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top'
        },
        'paint':{
            "text-color": "#696969",
                "text-halo-color": "#fff",
                "text-halo-width": 1
        }

        });

        map.addLayer(
        {
          id: "pol-fill",
          type: "fill",
          source: "pol",
          paint: {
            "fill-color": ["get","color"],
            "fill-opacity": 0.7
            }
        },
        firstSymbolId
      );

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

  map.on("click", "points", function (e) {
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
  opacity:0.9;
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
    opacity: 0.9 !important;
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
  opacity:0.9;
  overflow-y:clip;
  padding:10px;
}

p, ul {
  margin-left:1em;
  margin-right:1em;

}
}
</style>