import React from 'react';
import doc1 from '../../../images/Doctors/1.jpg';
import doc2 from '../../../images/Doctors/2.jpg';
import doc3 from '../../../images/Doctors/3.jpg';
import doc4 from '../../../images/Doctors/4.jpg';
import doc5 from '../../../images/Doctors/5.jpg';
import doc6 from '../../../images/Doctors/6.jpg';
import Doctor from '../Doctor/Doctor';

const ourDoctors = [
    {
        name:'Dr Asaduzzaman Rasel MBBS, FCPS(ENT)',
        img:doc1,
        description: 'ENT Specialist'
    },
    {
        name:'Prof. Dr. A K M Mustafa Hussain · MBBS, DTCD, MD (Chest)',
        img:doc2,
        description: 'Medicine & Pulmonology Specialist'
    },
    {
        name:'Prof. Dr. Zeenat Meraj',
        img:doc3,
        description: 'Oncologist'
    },
    {
        name:'Dr. Fahmida Zabeen',
        img:doc4,
        description: 'Pediatric Neonatologist & Endocrinologist'
    },
    {
        name:'Dr. Mohammad Rofiqul Islam',
        img:doc5,
        description: 'Neurologist'
    },
    {
        name:'Dr Md. Shah Alam',
        img:doc6,
        description: 'Orthopedist'
    }
]
const Doctors = () => {
    return (
        <div id="doctors" className="container">
            <h2 className="text-primary">Our Doctors</h2>
            <div className="row">
                {
                    ourDoctors.map(docs=><Doctor
                        key={docs.name}
                        docs={docs}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;