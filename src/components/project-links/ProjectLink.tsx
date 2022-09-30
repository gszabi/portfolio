import React from 'react';
import '../../App.css';
import {useState} from "react";

function ProjectLink(props: { element: string, setHoveredElement: Function, setSelectedElement: Function, setHidden: Function, index:number, hidden: boolean, }) {

    return (
                <h1 style={{color: "white",
                    cursor: 'default',
                    WebkitTextStroke: '1px black',
                    transition: 'all .8s ease-in',
                    marginLeft: (props.hidden && props.index % 2 === 1) ? '-3000px' : '',
                    marginRight: (props.hidden && props.index % 2 === 0) ? '-3000px' : ''
                }}
                    onMouseOver={() => props.setHoveredElement(props.element)}
                    onMouseOut={() => props.setHoveredElement('Default')}
                    onClick={() => {
                        props.setHidden(true);
                        props.setSelectedElement(props.element)
                    }}
                >
                    {props.element}
                </h1>
    )
}

export default ProjectLink;