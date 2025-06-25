import Bg from "../component/Bg";
import Board from "./Board";

import Nav from "./Nav";
import Text from "./Text";

function Head(){
    return(
        <div className=" w-full max-w-screen h-[150vh] md:h-[160vh] bg-black relative z-0 ">
         <Bg/>
         <Nav/>
         {/* Text part */}
         <Text/>
         {/* Board Part */}
         <Board/>
        

        </div>
    )
}
export default Head;