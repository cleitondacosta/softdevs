import React from 'react';

export default function useDev(navigation) {
  return {
    name: navigation.getParam('name', undefined),
    username: navigation.getParam('username', undefined),
    bio: navigation.getParam('bio', undefined),
    image: navigation.getParam('image', undefined),
    repositories: navigation.getParam('repositories', undefined),
  };
}
