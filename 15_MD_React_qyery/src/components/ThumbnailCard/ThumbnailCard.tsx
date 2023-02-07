
import styles from './ThumbnailCard.module.scss'


type ThumbnailCardProps = {
    id: number,
    name: string,
    image: string,
    onLoadMore?: (id:number)=> void
}



const ThumbnailCard = (cardProps : ThumbnailCardProps) => {

    const handleClick= (id:number) => {
        cardProps.onLoadMore ? cardProps.onLoadMore(id) : console.log('click');
    }


    return(
        <div className={styles.cardWrapper}>
            <img src={cardProps.image} alt={`photo of ${cardProps.name}`} />
            <div className={styles.cardContent}>
                <h4 className={styles.cardHedding}>{cardProps.name} </h4>
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


export default ThumbnailCard