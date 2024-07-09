import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function NewFeed() {

  const [caption, setCaption] = useState('')
  const [image, setImage] = useState<string|null>(null);

  useEffect(()=>{
      if(!image){
        pickImage();
      }
  },[image])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View className='p-3 items-center flex-1'>
      {/* Image picker */}
    {image ? (<Image
      source={{
        uri: image
      }}
      className='w-52 aspect-[3/4] rounded-lg shadow-md' />)
    :(<View  className='w-52 aspect-[3/4] rounded-lg shadow-md'/>)}

      <Text onPress={pickImage} className='text-blue-500 font-semibold m-5'>Change</Text>

      {/* Caption text editor */}

      <TextInput value={caption} onChangeText={(newValue) => setCaption(newValue)} placeholder='What is in your mind' className=' bg-red-50' />

      {/* uplode button */}
      <View className=' mt-auto '>
        <Pressable className='bg-blue-500 w-20 p-3 items-center rounded-md'>
          <Text className=' font-bold text-white  '>Post</Text>
        </Pressable>
      </View>
    </View>
  );
}
