import './style.css';
import ReadMore from '../../assets/read-more.svg'

import cowayImg from '../../assets/projects/coway-sg.png'
const cowayUrl = 'https://www.coway.sg/'
import RosrinImg from '../../assets/projects/rosrin.png'
const RosrinUrl = 'https://www.rosrin.com/home'
import apolloWelthImg from '../../assets/projects/apollo.png'
const apolloWelthUrl = 'https://www.apollowealth.co.th/th/home'
import uniqueImg from '../../assets/projects/unique.png'
const uniqueUrl = 'https://recruitment.unique.co.th/'
import videImg from '../../assets/projects/vide.jpg'

function Project()
{
  return (
    <div className="container">
      <div className="title">My Projects</div>
      <div className="project-wrapper">

        <div className="project-grid">
          <div className="project-image">
            <img src={cowayImg} alt="" />
          </div>
          <div className="project-text">
            <div className="title">01 Coway Singapore</div>
            <div className="text-normal">
                <strong>Project Description:</strong> <br />
                This was an E-commerce project focused on selling products and services. It incorporated various campaigns and promotions, an online payment system, and a comprehensive backend system. <br />
                <strong>Responsibilities:</strong> <br />
                My role involved designing the workflow, database schema, and API integrations with the frontend using Swagger. <br />
                <ul>
                  <li>Campaign feature development</li>
                  <li>Heart service feature development</li>
                  <li>GTM (Google Tag Manager) and Google Analytics integration</li>
                  <li>Etrust service integration with third-party providers</li>
                  <li>Backend CMS (Content Management System) for admin management of order services</li>
                  <li>Report generation (Excel)</li>
                  <li>Email sending functionality</li>
                </ul>
                <strong>Stack:</strong> Java, JavaScript, CSS, HTML, Spring Boot, jQuery, and AJAX
            </div>
            <div style={{ paddingTop: '10px' }}>
              <a target='_blank' href={cowayUrl}>
                <img style={{ width: '20px' }} src={ReadMore} alt="Read More" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-image">
            <img src={RosrinImg} alt="" />
          </div>
          <div className="project-text">
            <div className="title">02 Rosrin</div>
            <div className="text-normal">
                <strong>Project Description:</strong> <br />
                This was an E-commerce system for online product sales and online payments, utilizing the Omise payment gateway. <br />
                <strong>Responsibilities:</strong> <br />
                <ul>
                  <li>Designing the workflow.</li>
                  <li>Designing the database schema.</li>
                  <li>Designing APIs.</li>
                  <li>Developing the stock deduction and sorting system.</li>
                  <li>Integrating with Flash Express shipping service.</li>
                </ul>
                <strong>Stack:</strong> C#, .NET, HTML, CSS, JavaScript, jQuery, and AJAX
            </div>
            <div style={{ paddingTop: '10px' }}>
              <a target='_blank' href={RosrinUrl}>
                <img style={{ width: '20px' }} src={ReadMore} alt="Read More" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-image">
            <img src={apolloWelthImg} alt="" />
          </div>
          <div className="project-text">
            <div className="title">03 Apollo Welth</div>
            <div className="text-normal">
                <strong>Project Description:</strong> <br />
                This project involved developing a company website that showcased products and services, included lead generation forms, contact forms, and an online job application system. <br />
                <strong>Responsibilities:</strong> <br />
                <ul>
                  <li>Developing the backend system for managing website content and various lead forms.</li>
                  <li>Implementing the online job application system.</li>
                </ul>
                <strong>Stack:</strong> C#, .NET, HTML, CSS, JavaScript, jQuery, and AJAX
            </div>
            <div style={{ paddingTop: '10px' }}>
              <a target='_blank' href={apolloWelthUrl}>
                <img style={{ width: '20px' }} src={ReadMore} alt="Read More" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="project-grid">
          <div className="project-image">
            <img src={uniqueImg} alt="" />
          </div>
          <div className="project-text">
            <div className="title">04 Unique</div>
            <div className="text-normal">
                <strong>Project Description:</strong> <br />
                This project involved developing a job application system and a reporting system. <br />
                <strong>Responsibilities:</strong> <br />
                <ul>
                  <li>Designing the workflow.</li>
                  <li>Developing the data entry system for job applications.</li>
                  <li>Creating PDF reports and ZIP file generation.</li>
                  <li>Developing the backend administration system for content management.</li>
                </ul>
                <strong>Stack:</strong> C#, .NET, HTML, CSS, JavaScript, jQuery, and AJAX
            </div>
            <div style={{ paddingTop: '10px' }}>
              <a target='_blank' href={uniqueUrl}>
                <img style={{ width: '20px' }} src={ReadMore} alt="Read More" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-image">
            <img src={videImg} alt="" />
          </div>
          <div className="project-text">
            <div className="title">05 Vide hospital</div>
            <div className="text-normal">
                <strong>Project Description:</strong> <br />
                This project involved developing an ERP (Enterprise Resource Planning) system for a hospital, designed to manage inventory of medications and various medical supplies/equipment. <br />
                <strong>Responsibilities</strong> <br />
                <ul>
                  <li>Designing the workflow, database schema, and APIs.</li>
                  <li>Developing report generation functionalities (Excel and PDF).</li>
                  <li>Implementing the membership management system.</li>
                </ul>
                <strong>Stack:</strong> TypeScript, Bun, and Elysia
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project;
