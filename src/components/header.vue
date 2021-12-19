<template>
  <div id="h">
    <div id="header">
      <a
        style="text-decoration: none; color: inherit;"
        href="https://github.com/kellyjellykitten/algorithmvisualizer/tree/modaltest2"
        target="_blank"
        ><button class="button button1"><b>GITHUB</b></button></a
      >

      <div id="main">
        <div class="img"></div>
        <div>
          <h2 id="heading">PATHFINDING<br />VISUALIZER</h2>
        </div>
      </div>
      <span id="sel"><slot name="select"></slot></span>
    </div>
    
    <button class="button button2" id="show-modal" @click="showModal = true">View Tutorial</button>
    <transition name="modal">
      <Modal v-if="showModal" @close="showModal = false"/>
    </transition>

    <article>
      <section>
        <h4>Select an Algorithm</h4>
        <p class="content">
          Try different algorithms from the drop-down menu.
        </p>
      </section>
      <section>
        <h4>Place Walls</h4>
        <p class="content">
          Walls can be inserted in the path to see how the algorithm
          resolves around these obstacles.
        </p>
      </section>
      <section>
        <h4>Visualize</h4>
        <p class="content">
          Intutive interface and options to quickly visualize the path-finding. Try the Instant Path feature to get a quick path.
        </p>
      </section>
    </article>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
      <a id="wiki" v-if="alg == 'Bellman-Ford Algorithm'" href="https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm" target="_blank" title="Wikipedia"><img src="../../public/wikipedia.png" ></a> 
      <p id="note" v-if="alg == 'Bellman-Ford Algorithm'">This algorithm is weighted and guarantees the shortest path! It is slower than Dijkstra's but more versatile, as it it is capable of handling grpahs in which some of the edge weights are negative numbers.</p>

    </div>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
      <a id="wiki" v-if="alg == 'Breadth First Search'" href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank" title="Wikipedia"><img src="../../public/wikipedia.png" ></a> 
      <p id="note" v-if="alg == 'Breadth First Search'">This algorithm is unweighted and guarantees the shortest path!</p>

    </div>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
      <a id="wiki" v-if="alg == 'Depth First Search'" href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank" title="Wikipedia"><img src="../../public/wikipedia.png" ></a> 
      <p id="note" v-if="alg == 'Depth First Search'">This algorithm is unweighted and does not guarantee the shortest path! Works best if the graph is mostly occupied.</p>

    </div>

    <p id="note" v-if="alg == 'SELECT AN ALGORITHM'">This graph is unweighted and travelling can be done only in UP🠝 DOWN🠟 LEFT🠜 RIGHT🠞</p>



  </div>
</template>

<script>
import Modal from './modal.vue';

export default {
  components: {
    Modal
  },
  props:{
    alg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
        showModal: false,
      };
  },
  // methods: {
  //   showModal() {
  //       this.isModalVisible = true;
  //     },
  //     closeModal() {
  //       this.isModalVisible = false;
  //     }
  // }
};
</script>

<style scoped>
#heading {
  /* text-align: center; */
  /* padding: 8px; */
  font-family: "Source Sans Pro", sans-serif;
  font-weight: lighter;
  font-size: 55px;
  margin: 0px;
  color: rgba(48, 46, 46, 0.979);
  /* background-color: rgb(17, 0, 27); */
  /* background-color: rgba(7, 7, 7, 0.863); */
}
#ba {
  margin-top: 18px;
  margin-left: 50px;
}
.button {
  
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 2em;
  cursor: pointer;
  border: 1px solid #4fc08d;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  
  color: #4fc08d;
  margin: none;
  outline: none;
  align-items: flex-start;
  transition-duration: 0.4s;
}
.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
.button1 {
  width: 140px;
  height: 40px;
  text-indent: 2em;
  background: url("../../public/github (1).png");
  background-position: 5px;
  background-repeat: no-repeat;
}
.button2 {
  background-color: #fff;
  padding: 15px 32px;
  font-size: 25px;
  font-weight: bold;
}
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
  /* margin-left: -10px;
  margin-right: -10px; */
}
.select {
  -webkit-appearance: button;
  -moz-appearance: button;
  /* -webkit-user-select: none;
  -moz-user-select: none; */
  -webkit-padding-end: 16px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 6px;
  -moz-padding-start: 4px;
  
  /* cursor: pointer; */
  background-color: rgb(
    255,
    255,
    255
  ); /* Fallback color if gradients are not supported */
  background-position: center right;
  background-repeat: no-repeat;
  border-radius: 2px;
  border: 1px gray;
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.1);
  color: #666968;
  font-size: 15px;
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  /* overflow: hidden; */
  /* padding-top: 2px;
  padding-bottom: 2px; */
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  width: 200px;
  height: 40px;
  border: 1px solid #4fc08d;
  border-radius: 2em;
  outline: none;
}
#h {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
}
h4 {
  font-size: 20px;
  align-content: center;
  /* font-style: italic; */
  font-weight: bold;
  padding: 1px;
  font-family: "Source Sans Pro", sans-serif;
  margin: none;
  border: none;
}
section {
  width: 33%;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 2em;
}
article {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: #4fc08d;
  padding: 20px;
}
.content {
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  align-content: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: rgba(26, 25, 25, 0.979);
  margin: none;
}
.img {
  background: url("../../public/rocket.png");
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
}
#main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 800px;
}
#note{
  background-color: #ecebeb;
  font-family: Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  font-weight: lighter;
  font-style: italic;
  font-size: 20px;
  align-content: center;
  padding: 5px;
  border-radius: 0.5em;
}
#wiki img{
  padding: 5px; 
  box-shadow: 0 0 6px rgb(163, 162, 162);
  border-radius: 100%; 
  /* background: lightgray; */
  margin-right: 4px;
  margin-top: 3px;
}
</style>



<!-- button {
  width: 140px;
  height: 40px;
  border-radius: 2em;
  cursor: pointer;
  background: url("../../public/github (1).png");
  background-position: 5px;
  background-repeat: no-repeat;
  /* box-sizing: border-box; */
  border: 1px solid #4fc08d;
  text-align: center;
  /* justify-content:center; */
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  /* padding: 0.75em 2em; */
  /* display: inline-block; */
  color: #4fc08d;
  font-size: 15px;
  background-color: white;
  margin: none;
  outline: none;
}
.modalbutton {
  width: 200px;
  height: 25px;
  border-radius: 2em;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 1px solid #4fc08d;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  color: #4fc08d;
  font-size: 25px;
  font-weight:bold;
  background-color: white;
  margin: 10px;
  padding: 10px;
} -->