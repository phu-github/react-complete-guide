import React, {useEffect, useState} from 'react';

function MountedUnmounted(props) {
    const [value, setValue] = useState();
    const [Counter, setCounter] = useState(1);
    useEffect(() => {
      console.log('Run 3: I run when component mounted.(callback) ');
      return () => {
        console.log('I when Unmounted.(cleanup)');
      }
    }, [Counter]);

    const handleIncrease = () =>{
      setCounter(Counter +1)
    }
    console.log("Run 1 (body)")
    return (
      <>
        <h2>Hello React {console.log("Run 2 (rendering)")}</h2>   
        <h1>{Counter}</h1>
        <button onClick = {handleIncrease}>Cộng</button>
      </>
          
    );
}

export default MountedUnmounted;