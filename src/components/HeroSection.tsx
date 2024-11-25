import React from 'react';
import {areasCovered} from "@/constants";

export default () => {
    return (
        <section>
            <div className="hero">
                <div>
                    <div className={'heroText'}>Professional Home Cleaning</div>
                    <div className={'heroSubtext'}>{areasCovered}</div>
                </div>
            </div>
        </section>
    )
}