/*
 *
 * @Copyright 2023 TO WIN
 *
 */

import React from 'react';
import Form from '../elements/Form';

const SectionCTA = ({sectionCTARef}) => {
    return (
		<section className="section-cta" ref={sectionCTARef}>
			<div className="section-cta__wrap">
				<div className="section-cta__wrap__content">
					<div className="section-cta__wrap__content__cta">
						<div className="section-cta__wrap__content__cta__copy">
							<h1><span className="secondary">Receba o contato</span> de nossa equipe agora!</h1>
							<p>Preencha este formulário que iremos conversar com você sobre seu projeto.</p>
						</div>
						<div  className="section-cta__wrap__content__cta__form">
							<Form mobile />
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  };
  
  export default SectionCTA;
  