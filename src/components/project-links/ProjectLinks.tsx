import React from 'react';
import '../../App.css';
import ProjectLink from "./ProjectLink";

const renderProjectLink = (setHoveredElement: Function, setSelectedElement: Function, setHidden: Function, e: string, index: number, hidden: boolean) => {
    return (
        <ProjectLink
        setHoveredElement={setHoveredElement}
        setSelectedElement={setSelectedElement}
        setHidden={setHidden}
        element={e}
        index={index}
        hidden={hidden}
        />
    )
}

function ProjectLinks(props: any) {
    return <div>
        <div className='project-links-container' style={{position: 'absolute'}}>
                {
                Object.keys(props.Elements).map((e, index) => {
                        if (e !== 'Default') {
                            return renderProjectLink(props.setHoveredElement, props.setSelectedElement, props.setHidden, e, index, props.hidden)
                        }
                    }
                )}
        </div>
    </div>
}

export default ProjectLinks;