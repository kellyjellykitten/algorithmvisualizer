<template>
  <div>
    <div id="line"></div>

    <head-box :alg="algorithm">
      <template v-slot:select>
        <select class="dropdown" v-model="algorithm" >
          <option style="color: #4fc08d;" hidden>{{ algorithm }}</option>
          <option>Breadth First Search</option>
          <option>Depth First Search</option>
          <option>Dijkstra's Algorithm</option>
          <option>A* Algorithm</option>
        </select>
        <br />
        <br />
      </template>
    </head-box>
    <br />
    <br/>
    <div id="temp">
      <!-- <span> -->
      <!-- <message-box v-if="noPath"></message-box> -->
      <box-grid ref="grid" :alg="algorithm"></box-grid>

      <!-- </span> -->
      <!-- <span> -->
      <content-box>
        <template v-slot:button>
          <div id="b">
            <!-- <button class="button" v-on:click="$refs.grid.createGraph()" >Build </button> -->
            <button
              class="button"
              @click="
                $refs.grid.createGraph();
                draw();
                hold = true;
                b = 'viz'
              "
              :pathArr="path"
            >Visualize</button>
            <div id="distance">
              <span>{{dist}}</span>
              <label for>
                <small>Distance</small>
              </label>
            </div>

            <button
              class="button"
              @click="$refs.grid.createGraph();
                drawi();
                hold = true;
                b = 'ins'"
            >Instant Path</button>
          </div>
        </template>
        <template v-slot:description>
          <p v-if="algorithm == 'Depth First Search'">This may or may not give the shortest path</p>
          <p v-else-if="algorithm == 'SELECT AN ALGORITHM'">Select an algorithm and click "Visualize"
          </p>
          <p v-else>This gives the shortest path possible</p>
        </template>

        <template v-slot:controls>
          <div id="b">
            <button class="button" @click="$refs.grid.clearCanvas()">Clear Canvas</button>
            <button class="button" @click="$refs.grid.clearPath()">Clear Path</button>
          </div>
        </template>
      </content-box>

      <!-- </span> -->
    </div>
    <br />
    <br />
    <foot></foot>
  </div>
</template>

<script>
import grid from "./components/grid";
import content from "./components/content";
import header from "./components/header";
import footer from "./components/footer";
import { emitter } from "./eventBus"

export default {
  components: {
    "box-grid": grid,
    "content-box": content,
    "head-box": header,
    "foot": footer
  },
  data() {
    return {
      path: null,
      dist: "∞",
      hold: false,
      count: 200,
      algorithm: "SELECT AN ALGORITHM",
      noPath: true,
      visitedNodes: null,
      i: -1,
      b: null
    };
  },
  created() {
    emitter.on("stop", data => {
      this.path = data.p;
      this.dist = data.d;
      this.count = 0;
      this.hold = false;
      this.noPath = true;
      this.visitedNodes = null;
      this.i = -1;
    });
    emitter.on("visited", data => {
      this.visitedNodes = data;
    })
    
    this.interval = setInterval(() => this.draw(), 15);
    this.interval = setInterval(() => this.drawPath(), 20);
  },
  
  methods: {
    drawPath() {
      if (
        this.algorithm == "Depth First Search" &&
        this.path != null &&
        this.i == this.visitedNodes.length
      ) {
        this.dist = this.path.length;
        if (this.count < this.path.length) {
          if (
            document.getElementById(this.path[this.count].name).className !=
            "sd"
          ) {
            document.getElementById(this.path[this.count].name).className =
              "path";
          }
          this.count++;
        }
      } else if(this.algorithm == "Breadth First Search"){
        if (this.count < this.path.length - 1) {
          if (
            document.getElementById(this.path[this.count].name).className !=
            "sd"
          ) {
            document.getElementById(this.path[this.count].name).className =
              "path";
          }
          this.count++;
        }
      }else if(this.algorithm == "Bellman-Ford Algorithm"  && this.path != null){
        this.dist = this.path.length-1;
        if (this.count < this.path.length) {
          if (
            document.getElementById(this.path[this.count].name).className !=
            "sd"
          ) {
            document.getElementById(this.path[this.count].name).className =
              "path";
          }
          this.count++;
        }
      }
      // }
    },
    drawi() {
      // let i = 0;
      
        if (this.algorithm == "Breadth First Search") {
          while (this.path == null) {
            this.$refs.grid.BFSsearch(false);
            // i ++;
            // if(i>800){
            //   if(this.path != null){
            //     this.noPath = false;
            //     break;
            //   }
            // }
          }
        }else if(this.algorithm == "Bellman-Ford Algorithm"){
          while(this.path == null){
            this.$refs.grid.bellmanFord();
          }
        }
        
        
      
    },
    draw() {
    if (this.algorithm == "Breadth First Search" && this.b == 'viz') {
      if (this.path == null) {
        this.$refs.grid.BFSsearch(true);
      }
    }
    else if (this.algorithm == "Depth First Search") {
      let a = null;
      if (this.i == -1) {
        a = this.$refs.grid.DFS();
        this.path = a[0];
        this.visitedNodes = a[1];
        this.i++;
      } else {
        if(this.b == 'viz'){
          if (this.i < this.visitedNodes.length) {
            document.getElementById(this.visitedNodes[this.i]).className =
              "visited";
            this.i++;
  
          }
        }else{
          this.i = this.visitedNodes.length;
        }
      }
    }else if(this.algorithm == "Bellman-Ford Algorithm" && this.hold == true && this.b == 'viz'){
          this.$refs.grid.bellmanFord();
          if(this.b == 'viz'){
            if(this.visitedNodes != null){
              for(let i = 0; i < 10; i++){
                document.getElementById(this.visitedNodes[this.i+1]).className = "visited";
                this.i++;
              }
              }
          }
          
        
      
      
    }
  }
  
          // i ++;
          // if(i>800){
          //   if(this.path != null){
          //     this.noPath = false;
          //     clearInterval(this.interval);
          //   }
          // }
          // }
        
     
  }
  // drag(){
  //   let s = document.getElementById(String(this.sx)+String("-")+String(this.sy));
  //   s.className = "unvisited";
  //   for (let i = 0; i <= 21; i++) {
  //     for (let j = 0; j <= 38; j++) {
  //       let id = document.getElementById(String(i) + String("-") + String(j));
  //       id.onmouseup = function drop(){
  //         id.className = "sd";
  //         var ar = id.id.split("-");
  //         this.sx = parseInt(ar[0]);
  //         this.sy = parseInt(ar[1]);
  //       }
  //     }
  //   }
  // },
  // update(){
  //   console.log("called");
  //   let s = document.getElementById(String(this.sx)+String("-")+String(this.sy));
  //   s.onmousedown
  //   return true;
  // // dispPath(event) {
  // //   this.path = event;
  // }
  // }
};
</script>

<style scoped>
.button {
  position: relative;
  width: 100px;
  height: 40px;
  font-size: 80%;
  border-radius: 2em;
  background-color: white;
  /* font-weight: bold; */
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  border: #4fc08d 1px solid;
  outline: none;
  margin: none;
  /* border: none; */
}
.button:hover {
  background-color: #4fc08d;
  border: #4fc08d;
  color: white;
  cursor: pointer;
}
.dropdown {
  background-color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 95%;
  text-align: center;
  margin: 0;
  text-overflow: ellipsis;
  width: 220px;
  height: 40px;
  border: 1px solid #4fc08d;
  border-radius: 2em;
  outline: none;
}
#nc {
  position: relative;
  width: 100px;
  height: 50px;
  font-size: 80%;
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
  background-color: rgba(255, 255, 255, 0.767);
}
#c {
  position: relative;
  width: 100px;
  height: 50px;
  font-size: 80%;
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
  box-shadow: 0 0 50px black;
}
#b {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding: 5px; */
  margin: 4px;
}
#temp {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
p {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 15px;
  color: white;
  outline: 2px;
  padding: 5px;
  color: gray;
  font-size: 20px;
  border-radius: 3px;
  /* font-family: 'Roboto Slab', serif; */
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: lighter;
  background-color: rgb(241, 240, 241);
}
#distance {
  position: relative;
  display: flex;
  width: 100px;
  height: 40px;
  flex-direction: column;
  border-radius: 2em;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  /* padding: 4px; */
  color: #f3eded;
  text-align: center;
  justify-content: center;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #4fc08d;
}
::-webkit-scrollbar {
  width: 6px;
  height: 0px;
}
::-webkit-scrollbar-track {
  background: #ececf1;
}
::-webkit-scrollbar-thumb {
  background: rgba(165, 160, 160, 0.637);
}
#line {
  background: linear-gradient(90deg,rgb(112, 218, 245),#defb8e 50%,rgb(52, 228, 52));
  /* height: 0.5em; */
  padding: 1px;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: none;
  /* text-align: center; */
  /* color: #fff; */
  /* font-size: 1.5rem; */
}
</style>
