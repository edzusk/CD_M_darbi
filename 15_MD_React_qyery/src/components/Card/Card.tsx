
import styles from './Card.module.scss'


type CardProps = {
    id:number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: {
        name: string,
        url : string,
    }
    location: {
        name: string,
        url: string,
    }
    image: string,
    episode: string[],
    url: string,
    created: string
}



const Card = (cardProps : CardProps) => {

    const isAlive = (status:string) => {
        if (status === 'Alive') {
            return styles.trafficLightGreen
        }else if (status === 'Dead') {
            return styles.trafficLightRed
        }else {
            return styles.trafficLightYellow
        }
    }
    

    return(
        <div className={styles.cardWrapper}>
            <img src={cardProps.image} alt={`photo of ${cardProps.name}`} />
            <div className={styles.cardContent}>
                <h4 className={styles.cardHedding}>{cardProps.name} </h4>
                <span className={styles.cardText}>{cardProps.status}
                <span className={isAlive(cardProps.status)}></span>
                </span>
                <p>{cardProps.gender}</p>
                <p>origin: {cardProps.origin.name}</p>
                <p>last known location: {cardProps.location.name}</p>

            </div>
        </div>
    )
}


export default Card