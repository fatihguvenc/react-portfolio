// Componenets
import WorkCard from '../components/WorkCard';
import DATA_LIST from "../data/data.js";

export default function MyWork(){
    const CardComp = DATA_LIST.map((item, index) => (
        <WorkCard item={item} key={index} />
        ));

    return(
        <div className=" col mt-1">
            {CardComp}
        </div>
    )
}