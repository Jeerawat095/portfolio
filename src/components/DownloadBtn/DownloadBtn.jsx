import './style.css'

import iconDownLoad from '../../assets/download.svg'
import pdfResume from '../../assets/resume.pdf'

function DownLoadBtn()
{
    return (
        <>
            <a className='pdf-resume' target='_black' href={pdfResume}>
                <div className='cDownload'>
                    <span>Resume</span>
                    <img className='download-svg' src={iconDownLoad} alt="" />
                </div>
            </a>
        </>
    )
}

export default DownLoadBtn