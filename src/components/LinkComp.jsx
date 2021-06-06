export default function LinkComp(props){
    return(
        <a className="link-component fw-bold text-white pe-2 ps-1 text-decoration-none" target="blank" href={props.url}>{props.text}</a>
    )
}