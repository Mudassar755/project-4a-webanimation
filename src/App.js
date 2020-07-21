import React, { useRef } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import tree from './images/tree3.png'
import tree1 from './images/tree6.png'
import cloud1 from './images/cloud1.png'
import cloud2 from './images/cloud2.png'
import building from './images/building1.png'
import road from './images/road.jpg'
import car from './images/car2.gif'
import cycle from './images/cycle.gif'
import people from './images/people.gif'

function App() {

  const { ref: cloud_1, getAnimation: cl1 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(700%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 15000,
      iterations: Infinity,
    },
  });
  const { ref: cloud_2, getAnimation: cl2 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(500%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 10000,
      iterations: Infinity,
    },
  });

  // const { ref:car1, getAnimation } = useWebAnimations({
  //   keyframes: {
  //     transform: "translateX(1050px)", 
  //   },
  //   timing: {
  //     duration: 3000,
  //     iterations: Infinity,
  //     easing: "ease-in-out"
  //   }
  // })
  const { ref: building1, getAnimation: build1 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],

    timing: {
      duration: 20000,
      iterations: Infinity,
    },
  });

  const { ref: tree_1, getAnimation: tri1 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(300%)" },
      { transform: "translateX(-100%)" },
    ],

    timing: {
      duration: 10000,
      iterations: Infinity,
    },
  });
  const { ref: tree_2, getAnimation: tri2 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(300%)" },
      { transform: "translateX(-100%)" },
    ],

    timing: {
      // delay: 7500,
      duration: 10000,
      iterations: Infinity,
    },
  });

  var frames = [cl1, cl2, build1, tri1, tri2];
  const speedUp = () => {
    frames.forEach((e) => e().updatePlaybackRate(e().playbackRate * 1.3));
  };

  const speedDown = () => {
    frames.forEach((e) => e().updatePlaybackRate(e().playbackRate / 1.3));
  };
  
  
  return (
    <div>
      <div className="wrapper" onClick = {() => {speedUp()}}>
          <img src={road} id="road" alt="road"/>
          {/* <img src={cloud} id="cloud1"/> */}
          <div className="clouds">
        <img
          ref={cloud_1}
          className="cloud1"
          src={cloud1}
          alt={"clouds"}
        />
        <img
          ref={cloud_2}
          className="cloud1"
          src={cloud2}
          alt={"clouds"}
        />
      
      </div>
      <img
        src={building}
        className="building1"
        ref={building1}
        alt={"building"}
      />
     
          {/* <img src={building} id="building1"/> */}
        <div className="footpath">
        </div>
          <img src={tree1} ref ={tree_1} id="tree2" alt="tree1"/>
          <img src={tree} ref={tree_2} id="tree1" alt="tree2"/>
        
          <img src={car} id="car" alt="car" />
          <img src={cycle} id="cycle" alt="cycle"/>
          <img src={people} id="people" alt="people" />
      
       
        
  
      </div>

      {/* <h2>Aimation State is {playState}</h2>
    <div ref={ref} style={{width:"100px", height:"100px"}}>
   Hello World
  </div>
  <button onClick={() => {
    getAnimation().play();
  }}>Play</button>
  <button onClick={() => {
    getAnimation().pause();
  }}>Pause</button> */}
    </div>
  );
}

export default App;
