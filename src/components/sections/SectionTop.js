/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import { useState, useEffect } from "react";
import { Slide, Grow } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import Form from "../elements/Form";

const SectionTop = () => {
    const [animationStart, setAnimationStart] = useState(false);

    useEffect(() => {
      setAnimationStart(true);
    }, []);

    return (
    <section className="section-top">
    	<div className="section-top__wrap">
       	 	<div className="section-top__wrap__content">
				<Grow in={animationStart}>
					<div className="section-top__wrap__content__logo">
						<img src={Logo} />
					</div>
				</Grow>
				<div className="section-top__wrap__content__cta">
					<Slide direction="right" in={animationStart} style={{ transitionDelay: animationStart ? '200ms' : '0ms' }}>
						<div className="section-top__wrap__content__cta__copy">
							<h3>TENHA UM SITE COM TODA ESTRUTURA E SUPORTE COM UM PLANO MENSAL PAGANDO POUCO E ENTREGA RÁPIDA</h3>
                            <h1>CRIAÇÃO DE <span className="primary">SITES POR ASSINATURA</span></h1>
							<p>Site por assinatura é a opção perfeita para quem precisa de uma solução completa de website com entrega rápida, hospedagem e suporte sem demandar grandes custos iniciais, pagando mensalmente.</p>
						</div>
					</Slide>
					<Slide direction="left" in={animationStart} style={{ transitionDelay: animationStart ? '200ms' : '0ms' }}>
						<div  className="section-top__wrap__content__cta__form">
							<Form />
						</div>
					</Slide>
				</div>
        	</div>
        </div>
    </section>
    )
  };
  
  export default SectionTop;
  