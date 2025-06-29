import './style.css';

function Experience() {
    return (
        <>
            <div className="cExperience-container">
                <div className="cExperience-title">My Experience</div>
                <div className="cExperience-wrapper">
                    <div className="cExperience-card">
                        <div className="cExperience-header">
                            <div className="cExperience-company">ORISMA TECHNOLOGY COMPANY LIMITED</div>
                            <div className="cExperience-date">March 2024 - Present</div>
                        </div>
                        <div className="cExperience-description">
                           As a Backend Developer, I designed system workflows, database schemas, 
                           and RESTful APIs to support scalable and maintainable applications. 
                           I was responsible for building robust backend systems, handling data processing, 
                           and ensuring seamless integration with third-party services.
                           My work emphasized clean code principles, performance optimization, 
                           and efficient architecture design to meet business needs and support long-term system growth.
                        </div>
                    </div>
                </div>
                <div className="cExperience-spacer"></div>
            </div>
        </>
    );
}

export default Experience;
