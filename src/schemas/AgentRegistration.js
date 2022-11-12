const agent_registration_schema = {
    $el: 'div',
    attrs: {
        class : 'flex flex-col'
    },
    children : [
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'agent_name',
                name: 'agent_name',
                label: 'Name',
                placeholder: 'Name eg.Doe Victor Muasya',
                validation:'required'
            }
        },//fname
        {
            $cmp: 'FormKit',
            props: {
                type: 'email',
                id: 'email',
                name: 'email',
                label: 'Email',
                validation:'email',
                placeholder: 'email',
            }
        },//m_name

        {
            $cmp: 'FormKit',
            props: {
                type: 'select',
                id: 'group_type',
                name: 'group_type',
                label: 'Group Type',
                placeholder: 'Select group type',
                validation:'required',
                options:{
                    COOP:'Cooperation',
                    TA:'Travel Agency',
                    INDIVIDUAL :'Individual',
                }
            }
        },
        {
            $cmp: 'FormKit',
            props: {
                type: 'checkbox',
                id: 'is_guest',
                name: 'is_guest',
                label: 'Is Guest',
            }
        },
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
                type: 'text',
                id: 'account_info',
                name: 'account_info',
                label: 'Account Info',
                placeholder: 'AORNFIRN',
            }
        },
        {
            $cmp: 'FormKit',
            props: {
                type: 'text',
                id: 'address',
                name: 'address',
                label: 'Address',
                placeholder: 'Address',
            }
        },

    ]
}

export {
    agent_registration_schema
}