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
        <Image source={ {uri:'/images/empty.png'}} style={{ width: 60, height: 60 }} />
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>No items in the list </Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: 'rgba(32, 32, 32, 1)', fontFamily: 'Inria Serif' }}>You don’t have any shop item</Text>
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#E6B022', fontFamily: 'Inria Serif', textdec }}>Continue shopping</Text>
      </YStack>


      <View style={{ marginTop: 40 }}>
        <Bar />
      </View>
    </>
  )
}
