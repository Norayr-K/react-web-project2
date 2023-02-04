import { v4 as uuidv4 } from 'uuid';

const Offers = () => {
    const villas = [

        {
            id: uuidv4(),
            title: 'Villa ee view',
            address: {
                city: 'LA',
                street: '17 street',
                building: 55
            },
            price: 729,
            description: 'two bedroom see view, 2000 sqft',
        },
        {
            id: uuidv4(),
            title: 'Villa near mountain',
            address: {
                city: 'SF',
                street: '33 street',
                building: 77
            },
            price: 835,
            description: 'three bedroom mountain view, 1500 sqft',
        },
        {
            id: uuidv4(),
            title: 'Villa ocean view',
            address: {
                city: 'Miami',
                street: 'Court street',
                building: 5
            },
            price: 570,
            description: 'five bedroom ocean view, 3000 sqft',
        }


    ]

    return (
        <ul>
            {villas.map(el => (
                    <li key={el.id}>
                        <hr/>

                        <strong>{el.title}</strong>
                        <br/> <i>  {el.address.city + ' ' + el.address.street + ' ' + el.address.building}</i>
                        <br/>{el.description}
                        <br/>Price: ${el.price}


                    </li>
                )
            )
            }
        </ul>

    );
};

export default Offers;