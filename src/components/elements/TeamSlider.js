/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import React from 'react';
import { Slide } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const TeamSlider = ({animationStart}) => {

    const [pageSlider, setPageSlider] = React.useState(1);
    const memberElementRef = React.useRef(null);

    React.useEffect(() => {
        setTimeout(() => {
            if (pageSlider === 1) {
                setPageSlider(2)
            } else {
                setPageSlider(1)
            }
        }, "15000");
    }, [pageSlider]);

    const handleChangePage = (btn) => {
        if (btn === 'prev') {
            if (pageSlider === 1) {
                setPageSlider(2)
            } else {
                setPageSlider(1)
            }
        } else {
            if (pageSlider === 2) {
                setPageSlider(1)
            } else {
                setPageSlider(2)
            }
        }
    }

    return (
        <div className="team-slider">
            <div className="team-slider__wrap">
                <div className="team-slider__wrap__btn">
                    <button type='button' onClick={() => handleChangePage('prev')}>
                        <ArrowBackIos />
                    </button>
                </div>
                {pageSlider === 1 && (
                    <div className="team-slider__wrap__member" ref={memberElementRef} >
                        <Slide direction='right' in={animationStart} container={memberElementRef.current} unmountOnExit mountOnEnter>
                            <div className="team-slider__wrap__member--1" />
                        </Slide>
                        <Slide direction='left' in={animationStart} unmountOnExit mountOnEnter>
                            <div className="team-slider__wrap__member__copy">
                                <h1>Fileto Filho</h1>
                                <p>Formado em Ciência da Computação pela Universidade Federal do Tocantins. Trabalha como frontend a mais de 10 anos. Já trabalhou em inúmeros projetos de diversas áreas em algumas empresas, tanto no Brasil quanto no exterior.</p>
                                <p>Atua com as tecnologias mais performáticas para entregar o melhor produto possível.</p>
                            </div>
                        </Slide>
                    </div>
                )}
                {pageSlider === 2 && (
                    <div className="team-slider__wrap__member">
                    <Slide direction='right' in={animationStart} unmountOnExit mountOnEnter>
                        <div className="team-slider__wrap__member--2" />
                    </Slide>
                    <Slide direction='left' in={animationStart} unmountOnExit mountOnEnter>
                        <div className="team-slider__wrap__member__copy">
                            <h1>Filipe Paixão</h1>
                            <p>Formado em Design Gráfico e em Engenharia Mecânica na UNIFACS. Trabalha com design gráfico a mais de 10 anos. Já trabalhou em inúmeros projetos de diversas áreas, tem experiência como webdesigner e UX/UI.</p>
                            <p>Atua com as ferramentas mais atuais do mercado para entregar o melhor produto possível.</p>
                        </div>
                    </Slide>
                </div>
                )}
                <div className="team-slider__wrap__btn">
                    <button type='button' onClick={() => handleChangePage('next')}>
                        <ArrowForwardIos />
                    </button>
                </div>
            </div>
        </div>
    )
};
  
export default TeamSlider;
  