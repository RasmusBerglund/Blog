import React from 'react';
import { Route, NavLink } from 'react-router-dom'

const Post = (props) => {
  return (
    <div className="col-4">
      <NavLink to={{
        pathname: '/post',
        search: "id=" + props._id
      }}>
        {props.title}
      </NavLink>
    </div>);
};

export const BlogList = (props) => {
  return (
    <div className="col-12">
      {props.posts.map(post => <Post key={post._id} {...post} />)}
    </div>
  );
};