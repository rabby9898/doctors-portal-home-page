import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css';
import Rashed from '../../../images/people-1.png';
import Icard from '../../../images/people-1.png';
import Zilan from '../../../images/people-1.png';

const blogData=[
    {
        name:'Dr.Rashed Kabir',
        img:Rashed,
        date:'14 aug 2015',
        title:'Check at least a doctor in a year for your teeth',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        name:'Dr.Icard Rite',
        img:Icard,
        date:'8 sep 2015',
        title:'2 times of a brush in a day can keep you healthy',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        name:'Dr. Zilan Kabir',
        img:Zilan,
        date:'25 Jan 2018',
        title:'The tooth cancer is taking very big challenge',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }
]
const Blog = () => {
    return (
        <section className="row offset-md-1">
            <div style={{marginBottom:'80px', marginTop:'80px'}}>
                <h6 style={{textAlign:'center',color:'#1CC7C1'}}>Our Blog</h6>
                <h1 style={{textAlign:'center'}}>From Our Blog News</h1>
            </div>
            {
                blogData.map(blog => <BlogCard blog={blog}></BlogCard>)
            }
        </section>
    );
};

export default Blog;