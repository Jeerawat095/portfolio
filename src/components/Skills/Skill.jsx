import './style.css'
import ajax from '../../assets/tech-stack/ajax.svg'
import cSharp from '../../assets/tech-stack/c-sharp.svg'
import css from '../../assets/tech-stack/css.svg'
import docker from '../../assets/tech-stack/docker.svg'
import html5 from '../../assets/tech-stack/html5.svg'
import java from '../../assets/tech-stack/java.svg'
import javascript from '../../assets/tech-stack/javascript.svg'
import jquery from '../../assets/tech-stack/jquery.svg'
import springboot from '../../assets/tech-stack/spring-boot.svg'
import typescript from '../../assets/tech-stack/typescript.svg'

function Skills()
{
    return(
    <>
        <div className='cSkills'>
            <div className='cSkillsMainText'>My Skills</div>
            <div className='cSkillsLogoContainer'>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={ajax} alt="" />
                    <p className='cSkillTextItem'>Ajax</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={cSharp} alt="" />
                    <p className='cSkillTextItem'>C#</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={css} alt="" />
                    <p className='cSkillTextItem'>Css</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={docker} alt="" />
                    <p className='cSkillTextItem'>Docker</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={html5} alt="" />
                    <p className='cSkillTextItem'>Html</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={java} alt="" />
                    <p className='cSkillTextItem'>Java</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={javascript} alt="" />
                    <p className='cSkillTextItem'>Java script</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={jquery} alt="" />
                    <p className='cSkillTextItem'>Jquery</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={springboot} alt="" />
                    <p className='cSkillTextItem'>Spring boot</p>
                </div>
                <div className='cSkillLogoItem'>
                    <img className='cSkillImg' src={typescript} alt="" />
                    <p className='cSkillTextItem'>type script</p>
                </div>
                
            </div>
        </div>
    </>
    )
}
export default Skills