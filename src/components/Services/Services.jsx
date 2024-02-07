import React, {useState, useEffect } from 'react'
import './Services.css';
import Menu from '../Services/profiles';
import ScrollReveal from 'scrollreveal';
import imgbanner from '../../Assets/banneryoga.png';

const Services = () => {

    const allProjects = Menu; // Store all projects separately

    // Initialize items state with all projects
    const [items, setItems] = useState(allProjects);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const sr = ScrollReveal({
          reset: true,
          distance: '60px',
          duration: 1000,
          delay: 400,
        });
    
        sr.reveal('.title_work, .section_about-subtitle, .project_categories', { delay: 500, origin: 'left' });
        sr.reveal('.porfolio_container', { delay: 500, origin: 'bottom', interval: 200 });

      }, []);

      
      const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term); // Actualizar el estado de searchTerm
    
        const filteredItems = allProjects.filter((item) => {
          return item.name.toLowerCase().includes(term);
        });
    
        setItems(filteredItems);
      };

  return (
    <section className='work section contenedor' id='portfolio'>

      <div className="bannerTherapist">
        <img className='imgbanner' src={imgbanner} alt="/" />
      </div>

        <h2 className='section_title title_work'>Available Therapists</h2>
        <p className="section_about-subtitle">Choose a therapy session to get started!</p>


      <div className='search-container'>
        <input
          className='search-input'
          type='text'
          placeholder='Buscar por título...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

        <div className='contenedor porfolio_container'>
            {
                items.map((elem) =>{
                    const {name, img, description} = elem;

                    return (
                        
                        <article className='project_item'>

                            <div className='portfolio_item-image'>
                                <img src={img} alt={name} className='project_img'/>
                            </div>

                            <h3 className='project_title'>{name}</h3>
                            <p className='project_description'>
                                {description}
                            </p>
            
                            <div className='container_btn'> 
                              <button className='btnservices'>Purchase Session</button>                   
                            </div>
                        </article>
                    )
                })
            }

        </div>

    </section>
  )
}

export default Services
