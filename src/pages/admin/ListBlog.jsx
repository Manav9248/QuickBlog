import React, { useEffect, useState } from 'react'
import { blog_data, dashboard_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

const ListBlog = () => {

  // usestate hook
  const [blogs,setBlogs] = useState([]);

  //function for fetching Blogs
  const fetchBlogs = async () =>{
    setBlogs(blog_data);
  }

  // using useEffect hook
  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1>All Blogs</h1>
        <div className="relative h-4/5 mt-4  max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
      <table className="w-full text-sm text-gray-500">
        <thead className="text-xs text-gray-600 text-left uppercase">
          <tr className="border-b border-gray-300">
          <th scope="col" className="px-2 py-4 xl:px-6">#</th>
          <th scope="col" className="px-2 py-4">BLOG TITLE</th>
          <th scope="col" className="px-2 py-4 max-sm:hidden">date</th>
          <th scope="col" className="px-2 py-4 max-sm:hidden">status</th>
          <th scope="col" className="px-2 py-4">actions</th>
          </tr>

        </thead>
        <tbody>
           {blogs.map((blog,index)=>{
            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1}/>
           })}
        </tbody>

      </table>

    </div>
      </div>

  )
}

export default ListBlog