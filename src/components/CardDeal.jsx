import { card } from '../assets';
import styles, { layout }from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
			<p className={`${styles.paragraph} max-w-[470] mt-5`}> Arcu tortor, puris in mattis at sed integer faucisbu. Aliquet quils aliqeut eget mausrus tortor. Aliquet Ultriesces ac, ametue</p>
			<Button styles="mt-10"/>
		</div>

		<div className={layout.sectionImg}>
			<img src={card} alt="card" classname="w-[100%] h-[100%]"/>

		</div>
		
    </section>
  )
}

export default CardDeal