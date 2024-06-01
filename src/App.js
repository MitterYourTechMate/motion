import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div style={{display:"flex", 
    flexDirection:"column", 
    backgroundColor:"black",
    height:"100vh",
    color:"white",
    fontSize:"80px",
    fontFamily:"monospace",
    alignItems:"center",
    justifyContent:"center"
    }}>
      <motion.div
        initial={{x:-500, backgroundColor:"#FFFF00"}}
        animate={{x:0, backgroundColor:"#000000"}}
        transition={{duration:1, ease:"linear"}}
      >WEB DESIGN AGENCY</motion.div>
      <motion.div
        initial={{y:-500, backgroundColor:"#0000FF"}}
        animate={{y:0, backgroundColor:"#000000"}}
        transition={{duration:1, ease:"linear"}}
      >We Build Web Applications</motion.div>  
    </div>
  );
}

export default App;
