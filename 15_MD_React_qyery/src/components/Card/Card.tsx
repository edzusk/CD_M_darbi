
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
    onLoadMore?: (id:number)=> void
}



const Card = (cardProps : CardProps) => {

    const handleClick= (id:number) => {
        cardProps.onLoadMore ? cardProps.onLoadMore(id) : console.log('click');
    }
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
                <button className={styles.cardButton}
                onClick={(e) => {
                    e.preventDefault()
                    handleClick(cardProps.id);
                    }}>
                        Load More
                </button>
            </div>
        </div>
    )
}


export default Card