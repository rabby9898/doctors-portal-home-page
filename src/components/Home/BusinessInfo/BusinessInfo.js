import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        title: 'Opening hours',
        description:'lorum ipsum 24 hours ipsum',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description:'1232 Barghimhum, London',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description:'+2344334343',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;