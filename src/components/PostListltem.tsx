
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Image, Text, View } from 'react-native';

// const post = posts[0]

export default function PostListItem({post}) {

   


    return (
        <View className='bg-white'>
            {/* Header of the post */}
            <View className='p-3 flex-row items-center gap-4 '>
                <Image source={{ uri: post.user.image_url }} className='w-12 aspect-square rounded-full ' />
                <Text className=' font-semibold text'>{post.user.username}</Text>
            </View>
            {/* Image of the post */}
            <Image source={{ uri: post.image_url }} className='w-full aspect-[4/3]' />
            {/* Footer of the post */}
            <View className="flex-row gap-3 p-3">
                <AntDesign name="hearto" size={20} />
                <Ionicons name="chatbubble-outline" size={20} />
                <Feather name="send" size={20} />

                <Feather name="bookmark" size={20} className="ml-auto" />
            </View>
        </View>
    );
}
