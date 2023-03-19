
function RandomButton(){

    
     const random ={
        randomnum : (Math.random()),
     

        generaterannum : () => {
            console.log(random.randomnum);
            alert(random.randomnum)

        }}

    return(
        <div className="container" style={{ width: "60%", textAlign: "center" }}>
            <button onClick={()=>random.generaterannum()} className="btn btn-primary mb-3 text-center">Random Number</button>
        </div>


    )
}

export default RandomButton