import React, { Component } from 'react';
 
import { Image } from 'react';
 
export default class HeaderIcon extends Component {
  render() {
    return (
    //   <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'https://aboutreact.com/wp-content/uploads/2018/07/logosmalltransparen.png',
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
    //   </View>
    );
  }
}