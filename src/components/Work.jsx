import "./Work.css"
import ProjectData from "./WorkCardData";
import WorkCard from "./WorkCard";
function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectData.map((val,index)=>{
          return(
            <WorkCard 
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            source={val.source}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work