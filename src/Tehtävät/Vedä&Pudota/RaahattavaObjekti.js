import React from "react";
import { motion } from "framer-motion";

export default function RaahattavaObjekti(props){
  /*if variable that is created and appointed to the div is 0 return draggable object, if it is 1 creates non draggable div and 
  positions it inside the basket. If draggable objects classname ends with 8,9, or 10 and variable is 1 hides the div.*/
      if(props.int===0){
        return(
          <motion.div className={props.className} id={props.id} drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: 1.2 }} style={{marginLeft:props.left, marginTop:props.top,cursor: "grab"}}
            dragElastic={1} dragMomentum={false} 
            onDragEnd={
              (event) => props.pysahdys(props.id,props.keyNum)
            }>
          </motion.div>)
      }else if(props.id === "dragObject8" || props.id === "dragObject9" || props.id === "dragObject10"){
          return( <motion.div className={props.className} id={props.id} style={{opacity:0}} >
          </motion.div>)
      }else{
          var condPos = 400 + (10 * (props.keyNum*2))
          return(
            <div className={props.className} id={props.id} style={{marginLeft:condPos, marginTop:480}}>
            </div>)}
}