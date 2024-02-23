import "./sidebar.css" 
import {RssFeed, ChatBubble, PlayCircleFilled, Group, Bookmark,
QuestionAnswerRounded,Work , Event, School} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
           <ul className="sidebarList">
             <li className="sidebarListItem">
                <RssFeed className="sidebarIcon"/>
                <span className="sidebarListText"> Food </span>
             </li>
             <li className="sidebarListItem">
                <ChatBubble  className="sidebarIcon"/>
                <span className="sidebarListText"> Chat </span>
             </li>
             <li className="sidebarListItem">
                <PlayCircleFilled className="sidebarIcon"/>
                <span className="sidebarListText"> Videos </span>
             </li>
             <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                <span className="sidebarListText"> Groups </span>
             </li>
             <li className="sidebarListItem">
                <Bookmark className="sidebarIcon" />
                <span className="sidebarListText"> Bookmarks</span>
             </li>
             <li className="sidebarListItem">
                <QuestionAnswerRounded className="sidebarIcon" />
                <span className="sidebarListText"> Questions</span>
             </li>
             <li className="sidebarListItem">
                <Work  className="sidebarIcon"/>
                <span className="sidebarListText"> Jobs</span>
             </li>
             <li className="sidebarListItem">
                <Event className="sidebarIcon"/>
                <span className="sidebarListText"> Events</span>
             </li>
             <li className="sidebarListItem">
                <School className="sidebarIcon"/>
                <span className="sidebarListText"> Courses</span>
             </li>
           </ul>
        </div>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
            <li className="sidebarFriend">
               <img src="\assets\person2.jpeg" alt=" " className="sidebarFriendImg" />
               <span className="SidebarFriendName">Ramsey Binda</span>
            </li>
        </ul>
    </div>
  )
}
