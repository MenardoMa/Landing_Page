import React from 'react'
import BlogCards from './BlogCards'
import { blogCardItem } from '../constant/data'
import { ArrowRight } from 'lucide-react'

const Blog = () => {
  return (
    <section className='section bg-gray-100' id='blog'>
        <div className='container'>
            <div>
                <div className='mb-6 md:mb-8 flex items-center justify-between'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold font-Rubik'>Recent Blog</h3>
                    <a href="" className='items-center gap-1 text-gray-500 hover:text-blue-300 transition-colors duration-300 hidden sm:flex'>View All Posts <ArrowRight size={18} /> </a> 
                </div>
                <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        blogCardItem.map((blog) => (
                            <div key={blog.id} className=''>
                                <BlogCards 
                                    imgUrl={blog.imgUrl} 
                                    title={blog.title}
                                    text={blog.text}
                                    postDate={blog.postDate}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog
