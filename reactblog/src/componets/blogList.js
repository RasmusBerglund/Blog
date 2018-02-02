import React from 'react';

const Post = (props) => {
  return (
    <div className="col-4">
        <div>
          {props.title}
        </div>
    </div>
  );
};

export const BlogList = (props) => {
  return (
    <div className="col-12">
      {props.posts.map(post => <Post key={post._id} {...post} />)}
    </div>
  );
};