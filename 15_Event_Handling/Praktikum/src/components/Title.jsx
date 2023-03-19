import { useState } from "react"
import article from "../object"

function Title(){
    
    let [ changebhs, setChangebhs ] = useState(false);
    const translate = () => 
      setChangebhs(!changebhs)
    

   

    
    return(
        
        <div className="container text-center" style={{ width: "60%" }}>
            <div className="LogoBS text-center">
  <img src="./src/assets/img/logoBS.png" style={{ width: "10%" }} />
</div>

  <h3 className="text-center">{changebhs ? article.title.id : article.title.en}</h3>
  <p className="text-center">{changebhs ? article.description.id : article.description.en}
  </p>
  <button onClick={translate} className="btn btn-primary mb-3 text-center">Translate</button>
</div>

    )
}

export default Title