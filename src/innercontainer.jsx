import Profile from "./assets/profile.png"
import Maininfo from "./maininfo.jsx";
import Footer from "./footer.jsx";
function InnerCard(){
    return(
        <>
        <div className="inner">
        <img src={Profile} alt="profilr" className="profile" />
        <Maininfo/>
        <Footer/>
        </div>
        
        </>
    );
}
export default InnerCard