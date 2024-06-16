import "./Cards.css";

const Cards = ({title, description, link, linktitle}) => {
    return ( 
        <div className="cards">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <a href={link}>{linktitle}</a>
        </div>
     );
}
 
export default Cards;