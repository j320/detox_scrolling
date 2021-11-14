/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, Image, FlatList} from 'react-native';

const App = () => {
  const images = [
    {name: 'ReactNative', imagePath: require('./assets/reactnative.png')},
    {name: 'JavaScript', imagePath: require('./assets/javascript.png')},
    {name: 'Java', imagePath: require('./assets/java.jpeg')},
  ];
  const images_2 = [
    {name: 'JavaScript', imagePath: require('./assets/javascript.png')},
    {name: 'ReactNative', imagePath: require('./assets/reactnative.png')},
    {name: 'Java', imagePath: require('./assets/java.jpeg')},
  ];
  const images_3 = [
    {name: 'Java', imagePath: require('./assets/java.jpeg')},
    {name: 'ReactNative', imagePath: require('./assets/reactnative.png')},
    {name: 'JavaScript', imagePath: require('./assets/javascript.png')},
  ];

  return (
    <>
      <ScrollView testID="background">
        <SafeAreaView>
          <ScrollView testID="listBackground">
            <FlatList
              horizontal
              keyExtractor={image => image.name}
              data={images}
              renderItem={({item, index}) => {
                return (
                  <Image
                    style={{width: 450, height: 350}}
                    source={item.imagePath}
                    testID={`image-${index}`}
                  />
                );
              }}
            />
          </ScrollView>
        </SafeAreaView>
        <SafeAreaView>
          <ScrollView testID="listBackground-2">
            <FlatList
              horizontal
              keyExtractor={image => image.name}
              data={images_2}
              renderItem={({item, index}) => {
                return (
                  <Image
                    style={{width: 450, height: 350}}
                    source={item.imagePath}
                    testID={`image-${index}`}
                  />
                );
              }}
            />
          </ScrollView>
        </SafeAreaView>
        <SafeAreaView>
          <ScrollView testID="listBackground-3">
            <FlatList
              horizontal
              keyExtractor={image => image.name}
              data={images_3}
              renderItem={({item, index}) => {
                return (
                  <Image
                    style={{width: 450, height: 350}}
                    source={item.imagePath}
                    testID={`image-${index}`}
                  />
                );
              }}
            />
          </ScrollView>
        </SafeAreaView>
        <SafeAreaView>
          <ScrollView testID="listBackground-4">
            <FlatList
              horizontal
              keyExtractor={image => image.name}
              data={images}
              renderItem={({item, index}) => {
                return (
                  <Image
                    style={{width: 450, height: 350}}
                    source={item.imagePath}
                    testID={`image-${index}`}
                  />
                );
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;
