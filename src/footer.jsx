import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faFacebook, 
  faGithub,
  faSquareTwitter   
} from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(<>
     <div className="footer">
          <a href="www.instagram.com"> <FontAwesomeIcon icon={faInstagram}  className="icon instagram"  /></a>
     <a href="www.facebook.com"> <FontAwesomeIcon icon={faFacebook} className="icon facebook" /></a>
     <a href="www.github.com.com"> <FontAwesomeIcon icon={faGithub} className="icon github" /></a>
     <a href="www.twitter.com"> <FontAwesomeIcon icon={faSquareTwitter} className="icon x" /></a>
           
     </div>
    </>);
}
export default Footer;