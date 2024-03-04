import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl font-bold m-4">All Category</h2>
            {
                categories.map(category => <div
                    key={category.id}> <Link to={`/category/${category.id}`}><button className='btn bg-zinc-50 w-full my-2 text-zinc-500'> {category.name} </button></Link>
                </div>)
            }
        </div>
    );
};

export default LeftSideNav;