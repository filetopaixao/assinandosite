/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import { useRef, useState, useEffect } from 'react';
import { Slide } from '@mui/material';
import { useOnScreen } from '../../utils/useOnScreen';
import Portfolio1 from '../../assets/images/portfolio1.png';
import Portfolio2 from '../../assets/images/portfolio2.png';
import Portfolio3 from '../../assets/images/portfolio3.png';
import Portfolio4 from '../../assets/images/portfolio4.png';

const SectionTeam = () => {
	const [isVisibleState, setIsVisibleState] = useState(false);
	const [customersCount, setCustomersCount] = useState(0);

	const visibilityRef = useRef(null);
	
	const isVisible = useOnScreen(visibilityRef);

	useEffect(() => {
		if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
	}, [isVisible, isVisibleState]);

    useEffect(() => {
        if (customersCount < 70 && isVisibleState) {
            setTimeout(() => {
                setCustomersCount(prevState => prevState + 1);
            }, "25");
        }
    },[customersCount, isVisibleState]);

	return (
		<section className="section-team">
			<div className="section-team__wrap">
				<div className="section-team__wrap__header">
                <h1>Mais de {customersCount} clientes!</h1>
				<Slide direction="down" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
					<h2 className="primary">Exemplos de alguns dos nossos trabalhos</h2>
				</Slide>
				</div>
				<div className="section-team__wrap__portfólio" ref={visibilityRef}>
                    <div className="section-team__wrap__portfólio__image">
                        <img src={Portfolio1} alt="Assiando site - Portfólio 1" />
                    </div>
                    <div className="section-team__wrap__portfólio__image">
                        <img src={Portfolio2} alt="Assiando site - Portfólio 2" />
                    </div>
                    <div className="section-team__wrap__portfólio__image">
                        <img src={Portfolio3} alt="Assiando site - Portfólio 3" />
                    </div>
                    <div className="section-team__wrap__portfólio__image">
                        <img src={Portfolio4} alt="Assiando site - Portfólio 4" />
                    </div>
					{/*<TeamSlider animationStart={isVisibleState} />*/}
				</div>
			</div>
		</section>
	)
  };
  
  export default SectionTeam;
  