import './Footer.css' ;
import Image from './linkedin.png' ;

function Footer (){

return (
<>
<p className ="para">
            &copy; Copyright reserved

            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;

            Contact us :
           <a href="https://www.linkedin.com/in/%D8%B6%D8%AD%D9%89-%D8%AE%D9%85%D8%A7%D9%8A%D8%B3%D9%87-05a728254/">
            <img   style={{ width : "2%" , height : "2%"  }} src= {Image} alt="linkedin img" />
            </a>
        </p>

</>
) ;

}


export default Footer ;