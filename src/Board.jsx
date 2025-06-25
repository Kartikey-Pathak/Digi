function Board(){
    return(
        <div className=" flex items-center justify-center">
        <div className=" w-[85%] max-w-[70rem] rounded-xl md:h-[36rem]  border-2 border-black shadow-blue-400 shadow-2xl backdrop-blur-2xl h-[50vh] bg-white absolute z-10 md:bottom-1 bottom-53 border-none outline-none">
            <img src="/board.png" className=" h-full w-full object-cover rounded-md border-none outline-none" alt="" />
        </div>
        </div>
    )
}
export default Board;