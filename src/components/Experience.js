import React from 'react'

export const Experience = () => {
    return (
        <div id="exper" className="experience"> 
        <div className="d-flex justify-content-center my-5">
            <h1 style={{color: '#800000'}}>Work Experience</h1>
        </div>
        <div className ="container experience-wrapper">
            <div className="timeline-block timeline-block-right">
                <div className="marker"> </div>
                <div className="timeline-content">
                
                <h3 style={{color: '#000000'}}>Morphbots-Web Developer Intern</h3>
                <br/>
                <ul>
                    <li> Developed and structured a user-friendly login and registration page <br/>using  HTML and CSS in WordPress</li> 
                    <li> Collaborated with a developer and the project manager to enhance the <br/>performance of the website by reducing bugs</li> 
                    <li> Participated in weekly meetings with project manager to discuss future objectives <br/>and ideas</li>
                </ul>
                </div> 
 

            </div>
            <div className="timeline-block timeline-block-left">
                <div className="marker"> </div>
                <div className="timeline-content">
                
                <h3 style={{color: '#000000'}}> Henry Ford College-Technical Assistant</h3> <br/>
                <ul> 
                    <li> Operated customer service desk, answered phone calls, processed returns <br/>and exchanges as well as computer data 
                    entry and using Microsoft Office</li>
                    <li> Assisted students in resolving technical difficulties they encountered up <br/>to 100 a week</li>
                    
                 </ul>
                </div> 
 

            </div>

        </div>
        <div className="d-flex justify-content-center my-5">
            <h1 style={{color: '#800000'}}>Projects</h1>
        </div>
        <div className ="container experience-wrapper">
            <div className="timeline-block timeline-block-right">
                <div className="marker"> </div>
                <div className="timeline-content">
                
                <h3 style={{color: '#000000'}}>RC4 Encryption and Decryption</h3>
                <br/>
                <ul>
                    <li> Designed and implemented a C program that runs on Linux which <br/>uses Amazon’s S3 as backend storage</li> 
                    <li> Mounted the bucket where creation, deletion or modification of files and<br/>  subdirectories in the local directory are 
                    reflected in the <br/> corresponding S3 bucket, and vice versa</li> 
                    <li> Created a stand-alone rc4, fully compatible with "openssl rc4" with both <br/> nosalt and salt options</li>
                    <li>All files in the file system are automatically encrypted using rc4 <br/>with salt, and applications can transparently <br/>operate 
                    on the files without explicit decryptions</li>
                </ul>
                </div> 
 

            </div>
            <div className="timeline-block timeline-block-left">
                <div className="marker"> </div>
                <div className="timeline-content">
                
                <h3 style={{color: '#000000'}}> WSU Social</h3> <br/>
                <ul> 
                    <li> Worked with a team of 3 students to create and design a website for Wayne State <br/>Students to connect and interact 
                    with other WSU students using HTML, CSS, <br/>JavaScript, SQL, and PHP.</li>
                    <li> The website allows users to create their personalized profile with their interests<br/> and hobbies. The user can join and 
                    post in other organizations as well as post <br/>under their profile</li>
                    <li>Attended weekly scrum meetings to discuss progress and future sprints</li>
                    <li> Used Git as a version control system to create different branches.</li>
                    
                 </ul>
                </div> 
                
                
             </div>
             <div className="timeline-block timeline-block-right">
                <div className="marker"> </div>
                <div className="timeline-content">
                
                <h3 style={{color: '#000000'}}>To Do list</h3>
                <br/>
                <ul>
                    <li> Developed a to do list using React.js that allows users to add, edit, and delete<br/> tasks that they want to work on</li> 
                    <li> Used Custom CSS Styling to enhance the style, and visual representation of the <br/>application</li> 
                    <li> Utilized the use of state hooks, and functions to enhance the performance of the<br/> application</li>
                    
                </ul>
                </div> 
 

            </div>
            <div className="timeline-block timeline-block-left">
                <div className="marker"> </div>
                <div className="timeline-content">
                
                <h3 style={{color: '#000000'}}> UDP Client and Server</h3> <br/>
                <ul> 
                    <li> Developed a C program that creates a UDP socket and it binds to the<br/> server address</li>
                    <li> The program allows users to transfer data between the client <br/> and server side</li>
                    <li>The user is able to perform mathmetical operations on the data transfered </li>
                     
                 </ul>
                </div> 
                </div>
            

        </div>
        </div>
    )
}

export default Experience;