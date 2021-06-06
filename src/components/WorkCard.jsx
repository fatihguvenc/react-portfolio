// Components
import LinkComp from "./LinkComp"
// Custom CSS
import "../styles/card.scss"

export default function WorkCard(props){
    const {img, projectName, technologies, description, demoURL, repoURL} = props.item;
    return(
        <div className="project-card d-flex flex-md-row flex-column mt-5 p-4">
            <img className="me-4" src={img} height="180" width="260" alt="" />
            <div className="d-flex flex-column justify-content-between">
                <div className="name fw-bold">{projectName}</div>
                <div className="tech text-grey fst-italic">{technologies}</div>
                <div className="disc">{description}</div>
                <div className="d-flex justify-content-end">
                    <LinkComp text="Github" url={repoURL} />
                    <LinkComp text="Demo" url={demoURL} />
                </div>
            </div>
        </div>
    )
}