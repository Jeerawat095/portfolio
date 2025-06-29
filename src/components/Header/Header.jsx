import './style.css'
import iconBlack from '../../assets/icon-black.svg';
import DownLoadBtn from '../DownloadBtn/DownloadBtn.jsx';

function Header() 
{
    return (
        <>
        <div className='cHeader'>
            <div className='cLogo'>
                <img className='img-icon' src={iconBlack} alt="" />
                <span>Jeerawat</span>
            </div>
            <DownLoadBtn/>
        </div>
        </>
    )
}

export default Header