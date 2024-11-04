import React from 'react';
import {areasCovered} from "@/constants";

export default () => {
    return (
        <section>
            <img src={'./logo.png'} className={'logo'} width={300}/>
            <div className="hero">
                <div>
                    <div className={'heroText'}>Professional Home Cleaning</div>
                    <div className={'heroSubtext'}>{areasCovered}</div>
                </div>
            </div>
        </section>
    )
}