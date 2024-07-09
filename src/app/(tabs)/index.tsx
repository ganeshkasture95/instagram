import React from 'react';
import { FlatList } from 'react-native';
import PostListItem from "~/src/components/PostListltem";

import posts from '~/assets/data/posts.json';

export default function FeedScreen() {

  // return (
  //   <View>
  //     <PostListItem post={posts[2]}/>
  //     <PostListItem post={posts[1]}/>
  //   </View>
  // );

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 10, maxWidth: 512, width:"100%",alignItems:'center'}}
      showsVerticalScrollIndicator={false}
      className='flex-1'
    />
  )
}
