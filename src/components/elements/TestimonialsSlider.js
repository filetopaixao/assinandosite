/*
 *
 * @Copyright 2023 TO WIN
 *
 */

import React from 'react';
import Slider from "react-slick";
import testimonial1 from '../../assets/images/testimonial-1.png';
import testimonial2 from '../../assets/images/testimonial-2.png';
import testimonial3 from '../../assets/images/testimonial-3.png';
import testimonial4 from '../../assets/images/testimonial-4.png';
import { ArrowBackIos, ArrowForwardIos, FormatQuote } from '@mui/icons-material';
import { Fade } from '@mui/material';
import { useOnScreen } from '../../utils/useOnScreen';

const TestimonialsSlider = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

	const visibilityRef = React.useRef(null);
    const slider = React.useRef(null);

	const isVisible = useOnScreen(visibilityRef);

	React.useEffect(() => {
		if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
	}, [isVisible, isVisibleState]);

    const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
        arrows: false,
	};

    return (
		<div className="testimonials-slider" ref={visibilityRef}>
            <button onClick={() => slider?.current?.slickPrev()}><ArrowBackIos /></button>
            <Fade in={isVisibleState} style={{ transitionDelay: '400ms' }}>
                <div className="testimonials-slider__slider">
                    <Slider {...settings} ref={slider}>
                        <div div className="testimonial">
                            <p>Para mim, a ajuda deles foi bem importante nos últimos meses. Foram quem tornou possível colocar no ar o site do jeito que eu gostaria (e que as pessoas costumam elogiar quando visitam). O suporte durante o período (inclusive com tutorial, quando precisei) e a disponibilidade de ajudar (até hoje) são diferenciais do seu trabalho. Obrigada!</p>
                            <div className="testimonial__thumb-box">
                                <div className="testimonial__thumb-box__thumb">
                                    <img src={testimonial4} alt="Depoimento - Mariana Andrade" />
                                    <div className="testimonial__thumb-box__thumb__quote">
                                        <FormatQuote />
                                    </div>
                                    <h2>Mariana Andrade</h2>
                                </div>
                            </div>
                        </div>
                        <div div className="testimonial">
                            <p>Excelentes profissionais com trabalho impecável, tirando todas as dúvidas necessárias e atendendo todas as necessidades. Conseguiu traduzir e transformar a ideia e projeto em algo real com perfeição.</p>
                            <div className="testimonial__thumb-box">
                                <div className="testimonial__thumb-box__thumb">
                                    <img src={testimonial1} alt="Depoimento - Aline Milani" />
                                    <div className="testimonial__thumb-box__thumb__quote">
                                        <FormatQuote />
                                    </div>
                                    <h2>Aline Milani</h2>
                                </div>
                            </div>
                        </div>
                        <div div className="testimonial">
                            <p>Demonstraram competência e segurança em relação ao serviço prestado. Sanaram todas as dúvidas quando solicitado, foram atenciosos e pontuais na entrega, características fundamentais no mercado contemporâneo.</p>
                            <div className="testimonial__thumb-box">
                                <div className="testimonial__thumb-box__thumb">
                                    <img src={testimonial2} alt="Depoimento - Paulo Mota" />
                                    <div className="testimonial__thumb-box__thumb__quote">
                                        <FormatQuote />
                                    </div>
                                    <h2>Paulo Mota</h2>
                                </div>
                            </div>
                        </div>
                        <div div className="testimonial">
                            <p>Profissionais muito solícitos, rápidos e competentes. Eles tem domínio das técnicas e ferramentas de desenvolvimento e sabe usá-las muito bem.</p>
                            <div className="testimonial__thumb-box">
                                <div className="testimonial__thumb-box__thumb">
                                    <img src={testimonial3} alt="Depoimento - Rafael Abud" />
                                    <div className="testimonial__thumb-box__thumb__quote">
                                        <FormatQuote />
                                    </div>
                                    <h2>Rafael Abud</h2>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Fade>
            <button onClick={() => slider?.current?.slickNext()}><ArrowForwardIos /></button>
        </div>
    );
};
  
export default TestimonialsSlider;
  