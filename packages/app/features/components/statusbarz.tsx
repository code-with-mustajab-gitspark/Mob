
import { View, Text, Image } from 'react-native';

export function StatusBarz() {
    return (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 9,
          paddingBottom: 9,
          paddingLeft: 23,
          paddingRight: 23,
          backgroundColor: '#FFFBF2',
        }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#000000',
              fontFamily: 'Urbanist'
            }}>12:00</Text>
            
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
              
                <Image source={{uri:'/Images/network.png'}} style={{
                  width: 18,
                  height: 10,
                }} />
                <Image source={{uri: '/Images/wifi.png'}} style={{
                  width: 15,
                  height: 11,
                }} />
                <Image source={{ uri: '/Images/battery.png'}} style={{
                  width: 27,
                  height: 13,
                }} />
            </View>
            
        </View>
    );
};

export default StatusBarz;
