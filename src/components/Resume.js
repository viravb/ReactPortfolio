import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

<div className="row skill">

<div className="three columns header-col">
   <h1><span>Skills</span></h1>
</div>

<div className="nine columns main-col">
    
   <p>
   {resumeData.skillsDescription}
   </p>
   <div class= "grid grid-cols-3 gap-2 py-4 md:gap-4 md:grid-cols-6 md:py-4 ">

      <div class="py-3 pt-2 bg-[#62DAFB] shadow-lg content-center min-h-80 text-white rounded md:hover:scale-110 text-center">
        <i class= "devicon-react-plain mx-auto " styles="font-size: 60px;"> </i><p class="text-center">React</p>
      </div>
      <div class="py-3 pt-2 bg-[#EFDB4F] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
          <i class="devicon-javascript-plain" ></i><p class="text-center" >Javascript</p>
      </div>
      <div class="py-3 pt-2 bg-[#1BB3C1] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-vuejs-plain"></i><p class="text-center">Vuejs</p>
      </div>
      <div class="py-3 pt-2 bg-[#E54D26] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-html5-plain" ></i><p class="text-center">HTML</p>
      </div>
      <div class="py-3 pt-2 bg-[#3D8FC5] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-css3-plain" ></i><p class="text-center">CSS</p>
            </div>
      <div class="py-3 pt-2 bg-[#1BB3C1] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-tailwindcss-plain" ></i><p class="text-center">Tailwind</p>
      </div>
      <div class="py-3 pt-2 bg-[#E54D26] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-java-plain" ></i><p class="text-center">Java</p>
      </div>
      <div class="py-3 pt-2 bg-[#336790] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-postgresql-plain" ></i><p class="text-center">PostGreSQL</p>
      </div>
      <div class="py-3 pt-2 bg-[#764ABC] drop-shadow-lg text-white rounded md:hover:scale-110 text-center">
      <i class="devicon-github-plain" ></i><p class="text-center">Github</p>
      </div>
      
      
   </div>
<div className="bars">

  {/* <ul className="skills">
    {
      resumeData.skills && resumeData.skills.map((item) => {
        return(
          <li>
          <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
          </span><em>{item.skillname}</em>
          </li>
        )
      })
    }

 </ul> */}

</div>

</div>

</div>

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


        

      </section>
    );
  }
}