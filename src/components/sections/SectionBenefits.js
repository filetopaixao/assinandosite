/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import React from 'react'
import Benefit from "../elements/Benefit";
import { HighQuality, SupportAgent, AttachMoney, Search } from '@mui/icons-material';
import ArrowScroll from '../../assets/images/arrow-scroll';
import { useOnScreen } from '../../utils/useOnScreen';

const SectionBenefits = () => {
	const [isVisibleState, setIsVisibleState] = React.useState(false);
	const refWrap = React.useRef(null);
	const visibilityRef = React.useRef(null);

	const isVisible = useOnScreen(visibilityRef);

	React.useEffect(() => {
		if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
	}, [isVisible, isVisibleState]);

	const onScroll = React.useCallback(event => {
		const { scrollY } = window;
		if (scrollY >= refWrap.current.offsetTop) {
			if ((scrollY - refWrap.current.offsetTop) + 160 + parseFloat(refWrap.current.firstElementChild.firstElementChild.offsetHeight)
				>= parseFloat(refWrap.current.offsetHeight)) return;
			visibilityRef.current.firstElementChild.style.top = `${(scrollY - refWrap.current.offsetTop) - 40}px`;
		}
	}, []);
  
	React.useEffect(() => {
	  window.addEventListener("scroll", onScroll, { passive: true });
	  return () => {
		 window.removeEventListener("scroll", onScroll, { passive: true });
	  }
	}, [onScroll]);

    return (
		<section className="section-benefits">
			<div className="section-benefits__wrap" ref={refWrap}>
				<div className="section-benefits__wrap__title" ref={visibilityRef}>
					<h1>
						Por que você deve ser <span className="primary">nosso parceiro</span>?
						<ArrowScroll />
					</h1>
				</div>
				<div className="section-benefits__wrap__benefits">
					<Benefit
						icon={<AttachMoney />}
						title="Dinheiro é essencial para investimento em qualquer negócio."
						copy="Nossos planos mensais dão a oportunidade ao empreendedor ter seu negócio na internet pagando pouco, tanto pela criação quanto pela hospegadem, entrega rápida e manutenção do seu site."
						isVisibleState={isVisibleState}
                        delay='800ms'
					/>
                    <Benefit
                        icon={<Search />}
                        title="Seu negócio na internet."
                        copy="Ter um site é a forma mais simples de ser encontrado hoje na internet. Pois o canal de busca mais acessado hoje em dia, quando alguém precisa de algo ou está curioso sobre um assunto, é o Google."
                        isVisibleState={isVisibleState}
                        delay='1300ms'
                    />
					<Benefit
						icon={<SupportAgent />}
						title="Suporte dedicado: Tenha um time de Web totalmente ao seu lado."
						copy="Responsabilidade e dedicação, é exatamente essa experiência que você e seus clientes terão. Tudo o que precisarem estaremos a disposição!"
						isVisibleState={isVisibleState}
						delay='1800ms'
					/>
					<Benefit
						icon={<HighQuality />}
						title="Barato é diferente de pouca qualidade."
						copy="Nossos serviços são baratos, e tem o melhor custo beneficio! Pois com uma única assinatura você fica totalmente despreocupado e com um site de qualidade profissional!"
						isVisibleState={isVisibleState}
						delay='2300ms'
					/>
				</div>
			</div>
		</section>
	  );
  };
  
  export default SectionBenefits;
  