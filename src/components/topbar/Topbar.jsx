import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">TiddingMedia</span>
        </div>
        <div className="topbarCenter">
          <span className="searchbar">
             <Search className="searchIcon"/>
             <input placeholder="Search Something Here" className="searchInput" />
          </span>
        </div>
        <div className="topbarRight">
           <div className="topbarLinks">
               <span className="tobarLinks">Homepage</span>
               <span className="tobarLinks">Timeline</span>
           </div>
           <div className="topbarIcons">
               <div className="topbarIconItem">
                 <Person />
                 <span className="topbarIconBadge">1</span>
               </div>
           
            
               <div className="topbarIconItem">
                 <Chat />
                 <span className="topbarIconBadge">2</span>
               </div>
               <div className="topbarIconItem">
                 <Notifications />
                 <span className="topbarIconBadge">3</span>
               </div>
           </div>
           <img src="/assets/person1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
