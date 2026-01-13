// import Profile from "./assets/profile.png"
import Person from "./personinfo.jsx";
function Maininfo(props){
  
    return(<>
     {/* <img src={Profile} alt="profilr" className="profile" /> */}
    <div className="maininfo">
        <p className="name">{props.name}</p>
        <p className="possition">{props.position}</p>
        <p className="website">{props.website}</p>
   <div className="mid">   
    <a href="mailto:pathaksaroj333@gmail.com"> <div className="email">Email</div></a> 
        <div className="linkedin">Linkedin</div></div>
         
         <div className="content"> <h2 className="about">About</h2>
<p className="abtd">
 {props.about}
</p>

<h2 className="int">Interest</h2>
<p className="intd">
  {props.interest}
</p>
</div>

        
       
    </div>

</>);

  
  
    
  
}
export default Maininfo;