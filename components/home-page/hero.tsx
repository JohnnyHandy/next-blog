import Image from 'next/image'

import classes from './hero.module.css'

function Hero () {
    return (
        <section className={classes.hero} data-testid='hero-section'>
            <div className={classes.image}>
                <Image
                    src="/images/site/roger.png"
                    alt="Image showing Roger"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, Im Roger</h1>
            <p>
                I blog about web development - especially React and Ruby on Rails
            </p>
        </section>
    )
}

export default Hero