import Profile from "./assets/profile.png"
import Maininfo from "./maininfo.jsx";
import Footer from "./footer.jsx";
import Person from "./personinfo.jsx";
function InnerCard(){
    let per = Person.map(p =>{
        return(
            <>
             <Maininfo name= {p.name} position = {p.possition} website ={p.website} about = {p.about} interest = {p.interest} />
       
            </>
        );
    });
    return(
        
        <>
        <div className="inner">
        <img src={Profile} alt="profilr" className="profile" />
        {per}
        {/* <Maininfo name= "devilal pathak" position = "pprinciple" website ="nnawalpurebs.edu.np" /> */}
        <Footer/>
        </div>
        
        </>
    );
}
export default InnerCard