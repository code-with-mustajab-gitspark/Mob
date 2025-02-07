import { Button, View, Text, Input, YStack, XStack, Separator } from '@my/ui'
import { Image, ScrollView, Keyboard, Modal, TouchableOpacity } from 'react-native'
import { StatusBar } from '../components/statusbar'
import Bar from '../components/bar'
import React, { useState } from 'react'
import { Link } from 'solito/link'

interface HomeScreenProps {
  pagesMode?: boolean
}

export function HomeScreen({ pagesMode }: HomeScreenProps) {
  const [isSearchFocused, setSearchFocused] = useState(false)
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [isSheetVisible, setSheetVisible] = useState(false)
  const percentage = 85
  const percentage2 = 45
  const percentage3 = 20
  const percentage4 = 10
  const percentage5 = 2
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    Keyboard.dismiss()
    setPopupVisible(true)
    setTimeout(() => {
      setPopupVisible(false)
    }, 2000)
  }

  const handleSubmitFeedback = () => {
    console.log(`Rating: ${rating}, Notes: ${notes}`)
    setSheetVisible(false)
    setNotes('')
    setRating(0)
  }

  return (
    <>
      <StatusBar />
      {/* Header */}
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '62%',
            padding: 24,
          }}
        >
          <Button
            style={{
              backgroundColor: '#FFFBF2',
              width: 40,
              height: 40,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#CAC4BC57',
            }}
          >
            <Link href="/homescreen">
              <Text style={{ color: '#202020', fontSize: 18, fontWeight: '700' }}>←</Text>
            </Link>
          </Button>
          <Text style={{ fontSize: 24, fontWeight: '700', fontFamily: 'Inria Serif' }}>Cart</Text>
        </View>

      <YStack 
      style={{ 
        marginTop: 147,
        flexDirection: 'column',
        justifyContent: 'center' }}>
        <Image source={ {uri:'/images/empty.png'}} style={{ width: 60, height: 60, marginLeft: 'auto', marginRight: 'auto' }} />
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif', textAlign: 'center', marginTop: 16 }}>No items in the list </Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: 'rgba(32, 32, 32, 1)', fontFamily: 'Inria Serif', textAlign: 'center', marginTop: 4 }}>You don’t have any shop item</Text>
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#E6B022', fontFamily: 'Inria Serif', textDecorationLine: 'underline', textAlign: 'center', marginTop: 12 }}>Continue shopping</Text>
      </YStack>
     

        {/* Recommended Products Section */}
        <YStack
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 194,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <XStack style={{ gap: 18, flexDirection: 'column' }}>
            <View
              style={{
                position: 'relative',
               }}
              >
                <Text
                  style={{
                    position: 'absolute',
                      top: 16,
                      left: 16,
                      fontSize: 14,
                      fontWeight: '700',
                      zIndex: 1,
                      fontFamily: 'Inria Serif',
                    }}
                    color="#E6B022"
                    >
                     New
                  </Text>
                <Image
                  source={{ uri: '/Images/darren.png' }}
                  style={{ width: 182.5, zIndex: 0, height: 244 }}
                  />
                <Image
                  source={{ uri: '/Images/heart-icon.png' }}
                    style={{
                      width: 18,
                      height: 18,
                      position: 'absolute',
                      top: 207,
                      left: 146,
                      zIndex: 1,
                    }}
                    />
              </View>
              <View>
                <Text fontSize={16} fontWeight="400" color="#202020" style={{ fontFamily: 'Inria Serif' }}>
                  Oxean Uedora Jacket
                 </Text>

                <Text fontSize={14} fontWeight="400" style={{ marginTop: 8, fontFamily: 'Inria Serif' }} color="#202020">
                  $21.45
                  <Text 
                  style={{ fontSize: 12,
                   fontWeight: '400', 
                   color: 'rgba(32, 32, 32, 0.33)', 
                   fontFamily: 'Inria Serif',
                   marginLeft: 5,
                   textDecorationLine: 'line-through'
                    }}>
                    $21.45
                  </Text>
                </Text>
              </View>
          </XStack>

          <XStack style={{ gap: 18, flexDirection: 'column' }}>
              <View
                style={{
                  position: 'relative',
                  }}
                >
                <Text
                 style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    fontSize: 14,
                    fontWeight: '700',
                    zIndex: 1,
                    fontFamily: 'Inria Serif'
                  }}
                  color="#E6B022"
                  >
                  New
                  </Text>
                <Image
                  source={{ uri: '/Images/skyblue-bag.png' }}
                  style={{ width: 182.5, zIndex: 0, height: 244 }}
                  />
                <Image
                  source={{ uri: '/Images/heart-icon.png' }}
                    style={{
                      width: 18,
                      height: 18,
                      position: 'absolute',
                      top: 207,
                      left: 146,
                      zIndex: 1,
                    }}
                    />
              </View>
              <View>
                <Text fontSize={16} fontWeight="400" color="#202020" style={{ fontFamily: 'Inria Serif' }}>
                    Vuki Handi Bag
                </Text>

                <Text fontSize={14} fontWeight="400" style={{ marginTop: 8, fontFamily: 'Inria Serif' }} color="#202020">
                  $16.20
                  <Text 
                  style={{ fontSize: 12,
                   fontWeight: '400', 
                   color: 'rgba(32, 32, 32, 0.33)', 
                   fontFamily: 'Inria Serif',
                   marginLeft: 5,
                   textDecorationLine: 'line-through'
                    }}>
                    $21.45
                  </Text>
                </Text>
              </View>
          </XStack>
        </YStack>

        <Bar />
    </>
  )
}
