import React from 'react';
import {areasCovered} from "@/constants";

export default () => {
    return (
        <section>
            <div className="hero">
                <div>
                    <h1 className={'heroText'}>Professional Home Cleaning</h1>
                    <h2 className={'heroSubtext'}>{areasCovered}</h2>
                </div>
            </div>
        </section>
    )
}