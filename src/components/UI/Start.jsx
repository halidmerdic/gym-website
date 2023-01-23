import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png';

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start_content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section_title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              reprehenderit eos quia rerum voluptatem, ullam officia iste labore
              architecto ad accusantium, amet accusamus autem dolorem minus
              optio dolor ipsa neque.
            </p>
            <button className="register_btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
