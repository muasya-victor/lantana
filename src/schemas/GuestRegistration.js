import {nationalities} from "../utils/nationalities";
const guest_registration_schema = {
    $el: 'div',
    attrs: {
        class : 'flex flex-col'
    },
    children : [
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'first_name',
                name: 'first_name',
                label: 'First Name',
                placeholder: 'First name eg.Doe',
                validation:'required'
            }
        },//fname
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'middle_name',
                name: 'middle_name',
                label: 'Middle Name',
                placeholder: 'Middle name eg.John',
            }
        },//m_name
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'last_name',
                name: 'last_name',
                label: 'Last Name',
                placeholder: 'Last name eg.Kinuthia',
                validation:'required'
            }
        },
        {
            $cmp: 'FormKit',
            props: {
                type: 'select',
                id: 'gender',
                name: 'gender',
                label: 'Gender',
                placeholder: 'Select Your Gender',
                validation:'required',
                options:{
                    M:'Male',
                    F:'Female',
                    PNTS:'Prefer Not To Say',
                    Other:'Other'
                }
            }
        },
        {
            $cmp: 'FormKit',
            props: {
                type: 'select',
                id: 'identification_type',
                name: 'identification_type',
                label: 'Identification Type',
                placeholder: 'Identification Type',
                validation:'required',
                options:{
                    NATIONALID:'National ID',
                    ALIENID:'Alien ID',
                    PASSPORTNO:'Passport Number',
                    MILITARYID:'Millitary ID'
                }
            }
        },//id type
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'identification_number',
                name: 'identification_number',
                label: 'Identification Number',
                placeholder: 'Identification Number eg A047917B',
                validation:'required'
            }
        },
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'telephone_number',
                name: 'telephone_number',
                label: 'Telephone Number',
                placeholder: ' eg +2544383839',
                validation:'required'
            }
        },
        {
            $cmp: 'FormKit',
            props: {
                type: 'select',
                id: 'nationality',
                name: 'nationality',
                label: 'Nationality',
                placeholder: 'Nationality',
                validation:'required',
                options:nationalities
            }
        },

    ]
}

export {
    guest_registration_schema
}