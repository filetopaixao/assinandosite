/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import { useRef, useState, useEffect } from 'react';
import { Slide } from '@mui/material';
import TeamSlider from "../elements/TeamSlider";
import { useOnScreen } from '../../utils/useOnScreen';

const SectionTeam = () => {
	const [isVisibleState, setIsVisibleState] = useState(false);

	const visibilityRef = useRef(null);
	
	const isVisible = useOnScreen(visibilityRef);

	useEffect(() => {
		if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
	}, [isVisible]);

	return (
		<section className="section-team">
			<div className="section-team__wrap">
				<div className="section-team__wrap__header">
				<Slide direction="down" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
					<h1>Quem Somos</h1>
				</Slide>
				</div>
				<div className="section-team__wrap__members" ref={visibilityRef}>
					<TeamSlider animationStart={isVisibleState} />
				</div>
			</div>
		</section>
	)
  };
  
  export default SectionTeam;
  