import './Tours.css' ;
const data = require('../../data/db.json')
function Tours (){

return (
<>
<h3> Tours List</h3>
{
data.map((item) =>{
    return (
        <div key={item.id}>
           <h4>{item.name}</h4>
           <img src={item.image} alt={item.name}></img>
          <br/>
          <br/>

            <hr/>
        </div>
    )
})
}
</>
) ;

}


export default Tours ;