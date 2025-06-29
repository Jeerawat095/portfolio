import './style.css'
import heroImage from '../../assets/hero-icon.svg'

function HeroHome()
{
    return(
    <>
        <div className="cHeroHome">
            <div className="cHero1">
                <div>
                    <span className='cHeroFrontLight'>Hello I'am</span>
                    <span className='cHeroFrontBlack' style={{paddingLeft: "20px"}}>Jeerawat.</span>
                </div>
                <div>
                    <span className='cHeroFrontBlack'>Developer</span>
                    <span className='cHeroFrontLight' style={{paddingLeft: "20px"}}>Base In Thailand.</span>
                </div>
                <div className='cHeroTextSmall'>
                My name is Jeerawat Wongsaree. I am 24 years old, and I have experience working as a Software Developer. I specialize in developing websites and applications to solve business problems, enhance operational efficiency, and drive sales for organizations. <br />
                Throughout my career, I have gained comprehensive experience in both Backend and Frontend Development. I prioritize development adhering to Clean Code principles to ensure highly efficient, easily maintainable, and scalable systems for future growth. <br />
                Beyond my technical expertise, I also place a strong emphasis on teamwork, effective communication, and continuous learning of new technologies to stay abreast of industry advancements and apply new knowledge to system development. <br />
                My ultimate goal is to create software that not only performs exceptionally well but also provides significant value and can be sustainably evolved over the long term.
                </div>
            </div>
            <div className="cHero3">
                <img className='heroImage' src={heroImage} alt="" />
            </div>
        </div>
    </>
    )
}

export default HeroHome