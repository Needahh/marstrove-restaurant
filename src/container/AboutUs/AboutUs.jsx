import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Rooted in a commitment to excellence, our kitchen is a sanctuary where every ingredient is chosen with care, every recipe is a testament to innovation, and every plate is a love letter to the art of dining. Welcome to a place where extraordinary moments unfold, and every meal is a celebration of the senses. This is not just a restaurant; it's an ode to the joy of savoring life's delectable moments.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded on a dream, Marstrove has woven a rich tapestry of culinary excellence since 2020. What began as a modest venture by dtechgirl, a visionary chef with a passion for crafting unforgettable dining experiences, has blossomed into a gastronomic haven.
          From our humble origins to becoming a beacon in the culinary world, our journey is a story of perseverance, innovation, and a relentless pursuit of perfection.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;