/*
 *
 * @Copyright 2023 TO WIN
 *
 */
"use client";

import React from 'react';
import { Zoom } from '@mui/material';

const Benefit = ({icon, title, copy, isVisibleState, delay}) => {
    return (
        <Zoom in={isVisibleState} style={{ transitionDelay: delay ? delay : '0ms' }}>
            <div className="benefit">
                <div className="benefit__icon">
                    {icon}
                </div>
                <div className="benefit__title">
                    {title}
                </div>
                <div className="benefit__copy">
                    {copy}
                </div>
            </div>
        </Zoom>
    );
};
  
export default Benefit;
  