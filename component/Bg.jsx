function Bg(){
    return(
        <div className=" h-[115vh] md:h-[160vh]  w-full max-w-screen absolute z-10">
            <video className="h-full w-full object-cover" src="/bg.webm" autoPlay loop muted playsInline></video>
        </div>
    )
}
export default Bg;