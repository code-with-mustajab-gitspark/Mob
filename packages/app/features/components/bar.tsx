import { View, Text } from 'react-native';

export default function Bar() {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      marginTop: 120,
    }}
    >
      <Text
      style={{
        width: 130,
        height: 5,
        borderRadius: 100,
        backgroundColor: '#000000',
      }}
      ></Text>
    </View>
  );
}

