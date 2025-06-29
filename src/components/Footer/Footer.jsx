import './style.css'
import logoWhite from '../../assets/icon-white.svg'

function Footer()
{
    return(
        <>
        <div className='cFooter'>
            <div className='cLeft'>
                <img className='logoFooter' src={logoWhite} alt="" />
                Jeerawat
            </div>
            <div className='cRight'>
                <div>@ 2025 - Present</div>
            </div>
        </div>
        </>
    ) 
}

export default Footer