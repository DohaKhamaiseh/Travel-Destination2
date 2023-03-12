import './Header.css' ;
import { Link, useParams } from "react-router-dom"

function Header (){
  const {id} = useParams();
return (
<>
  <h1> Travel Destinataions</h1>
  <nav>
    <Link to ="/">Home</Link>
    {/* <Link to ={'/city/:'+id}>City</Link> */}

  </nav>
</>
) ;

}


export default Header ;