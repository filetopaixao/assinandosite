/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { Slide, Zoom } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import PlanResource from "../elements/PlanResource";
import { useOnScreen } from '../../utils/useOnScreen';

const SectionPlans = () => {
	const [isVisibleState, setIsVisibleState] = useState(false);

	const visibilityRef = useRef(null);

	const isVisible = useOnScreen(visibilityRef);

	useEffect(() => {
		if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
	}, [isVisible]);

    return (
        <section className="section-plans" ref={visibilityRef}>
			<div className="section-plans__wrap">
				<div className="section-plans__wrap__header">
					<Slide direction="down" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '700ms' : '0ms' }}>
						<div>
							<h1>Desenvolvemos diversos nichos, através de <span className="primary">Planos de assinatura</span>!</h1>
							<h2>Enquanto uns gastam muito dinheiro e tempo colocando seu empreendimento na internet, nossos parceiros estão à frente dos seus concorrentes, <span className="primary">investindo poucos recursos, economizando para seu negócio</span>!</h2>
						</div>
					</Slide>
				</div>
				<div className="section-plans__wrap__plans">
					<div className="section-plans__wrap__plans__plan">
						<Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1000ms' : '0ms' }}>
							<div  className="section-plans__wrap__plans__plan__header">
								<EmojiEvents />
								<h1>One Page</h1>
								<h2>R$ 47,00 por mês</h2>
							</div>
						</Zoom>
						<Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1300ms' : '0ms' }}>
							<div>
                                <PlanResource>
                                    CANCELE QUANDO QUISER!
                                </PlanResource>
								<PlanResource>
									1 página
								</PlanResource>
								<PlanResource>
									Landing Page ou Site institucional
								</PlanResource>
                                <PlanResource>
									Implementação em ReactJS<span className="primary">*</span>
								</PlanResource>
								<PlanResource>
									100% Personalizada
								</PlanResource>
								<PlanResource>
									100% Responsivo<span className="primary">*</span>
								</PlanResource>
								<PlanResource>
									Hospedagem dedicada
								</PlanResource>
                                <PlanResource>
                                    Certificado SSL (Conexão Segura)<span className="primary">*</span>
                                </PlanResource>
								<PlanResource>
									3 E-mails Profissionais
								</PlanResource>
								<PlanResource>
									Manutenção durante assinatura
								</PlanResource>
                                <PlanResource>
                                    Entrega em 5 à 7 dias úteis
                                </PlanResource>
							</div>
						</Zoom>
				</div>
				<div className="section-plans__wrap__plans__plan">
					<Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1000ms' : '0ms' }}>
						<div  className="section-plans__wrap__plans__plan__header">
							<EmojiEvents />
							<h1>Corporativo</h1>
							<h2>R$ 87,00 por mês</h2>
						</div>
					</Zoom>
					<Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1300ms' : '0ms' }}>
						<div>
                            <PlanResource>
                                CANCELE QUANDO QUISER!
                            </PlanResource>
							<PlanResource>
                                Múltiplas Páginas
							</PlanResource>
                            <PlanResource>
                                Implementação em ReactJS<span className="primary">*</span>
                            </PlanResource>
							<PlanResource>
								100% Personalizada
							</PlanResource>
							<PlanResource>
								100% Responsivo<span className="primary">*</span>
							</PlanResource>
							<PlanResource>
								Hospedagem dedicada
							</PlanResource>
                            <PlanResource>
                                Certificado SSL (Conexão Segura)<span className="primary">*</span>
                            </PlanResource>
							<PlanResource>
								3 E-mails Profissionais
							</PlanResource>
							<PlanResource>
								Manutenção durante assinatura
							</PlanResource>
                            <PlanResource>
                                Entrega em 6 à 8 dias úteis
                            </PlanResource>
						</div>
					</Zoom>
				</div>
                <div className="section-plans__wrap__plans__plan">
					<Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1000ms' : '0ms' }}>
						<div  className="section-plans__wrap__plans__plan__header">
							<EmojiEvents />
							<h1>Loja Virtual</h1>
							<h2>R$ 147,00 por mês</h2>
						</div>
					</Zoom>
					<Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1300ms' : '0ms' }}>
						<div>
                            <PlanResource>
                                CANCELE QUANDO QUISER!
                            </PlanResource>
							<PlanResource>
								E-commerce
							</PlanResource>
                            <PlanResource>
                                Implementação em Wordpress
                            </PlanResource>
							<PlanResource>
								Painel Administrativo
							</PlanResource>
							<PlanResource>
								100% Personalizada
							</PlanResource>
							<PlanResource>
								100% Responsivo<span className="primary">*</span>
							</PlanResource>
							<PlanResource>
								Hospedagem dedicada
							</PlanResource>
                            <PlanResource>
                                Certificado SSL (Conexão Segura)<span className="primary">*</span>
                            </PlanResource>
							<PlanResource>
								3 E-mails Profissionais
							</PlanResource>
							<PlanResource>
								Manutenção durante assinatura
							</PlanResource>
                            <PlanResource>
                                Entrega em 7 à 9 dias úteis
                            </PlanResource>
						</div>
					</Zoom>
				</div>
				</div>
				<div className="section-plans__wrap__explanation">
					<p><b>Responsivo*</b>: Sites responsivos são aqueles que adaptam o tamanho das suas páginas ao tamanho das telas que estão sendo exibidos, como: Computador, celular, tablet, etc.</p>
					<p><b>ReactJS*</b>: React é um framework JavaScript criado pelo Facebook que é usado para criar aplicativos web com alto desempenho.</p>
					<p><b>Certificado SSL (Conexão Segura)*</b>: Ele mantém a segurança das conexões de Internet e impede que criminosos leiam ou modifiquem as informações transferidas entre dois sistemas. Protege as transações em seu site e mantém a privacidade e a segurança das informações dos clientes.</p>
				</div>
          	</div>
        </section>
    )
  };
  
  export default SectionPlans;
  