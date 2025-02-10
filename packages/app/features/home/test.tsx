import {
  Button,
  Paragraph,
  YStack,
  View,
  Text,
} from '@my/ui'
import { StatusBarz } from '../components/statusbarz'
import Slider from '../components/slider'
import Bar from '../components/bar'


export function HomeScreen() {
  
    return (
      <View style={{ backgroundColor: '#FFFBF2' }}>
      <StatusBarz />
      <View>
        <YStack style={{ paddingLeft: 24, paddingRight: 24 }}>
          <Text text="center"
           style={{ fontSize: 25,
            fontWeight: '700',
             color: '#073937',
              marginTop: 68 }}>
            Swipe to browse
          </Text>

          <Paragraph
           text="center"
            style={{ fontSize: 15,
             fontWeight: '400', 
             color: '#073937',
              marginTop: 4,
               lineHeight: 24 }}>
            Find products easily by sliding from one <br /> category to another
          </Paragraph>

          <Slider />

          <Button 
            style={{ marginTop: 68,
            backgroundColor: '#FFC107',
            borderRadius: 0,
            padding: 16,
            fontSize: 20,
            fontWeight: '700',
            color: '#073937',
             }}>
              Shop Now
            </Button>

          <Paragraph
           text="center"
            style={{ marginTop: 33,
             color: '#073937',
             fontSize: 12,
             fontWeight: '400',
              }}>
            Already have an account? {''}
            <Text
             style={{ color: '#073937',
              fontSize: 14,
              }}>
              Log in</Text>
          </Paragraph>
        </YStack>
      </View>
      <Bar />
    </View>
  )
}


 
