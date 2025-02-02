import { View, Text, Image } from 'react-native';
import { YStack } from '@my/ui';

export default function Slider() {
  return (
    <>
        <View 
        style={{ flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 35 }}>
          <Image 
            source={{uri:'/Images/Shirt.png'}}
            style={{ width: 252,
            height: 310 }} />
      </View>

      <YStack
      style={{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 53,
      }}
      >
        <Text
        style={{
          width: 18,
          height: 18,
          backgroundColor: 'transparent',
          borderWidth: 3,
          borderColor: '#363636',
          borderRadius: 100,
        }}>
        </Text>

        <Text
        style={{
          width: 10,
          height: 10,
          backgroundColor: '#757575',
          borderRadius: 100,
        }}>
        </Text>
      </YStack>
    </>
  );
}