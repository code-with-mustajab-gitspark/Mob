import { Button, View, Text, Input, YStack, XStack, Separator } from '@my/ui'
import { Image, ScrollView, Keyboard, Modal, TouchableOpacity } from 'react-native'
import { StatusBar } from '../components/statusbar'
import Bar from '../components/bar'
import React, { useState } from 'react'
import { Link } from 'solito/link'

interface CartScreenProps {
  pagesMode?: boolean
}

export function CartScreen({ pagesMode }: CartScreenProps) {
  const [isSearchFocused, setSearchFocused] = useState(false)
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [isSheetVisible, setSheetVisible] = useState(false)
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
      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>

        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '64%',
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


        {/* Cart Items */}

        <View style={{ marginTop: 42, marginLeft: 24, marginRight: 24 }}>

          <XStack style={{ flexDirection: 'row', gap: 16 }}>
            <Image source={{ uri: '/Images/darren.png' }} style={{ width: 91, height: 122 }} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View style={{ width: '220px' }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Inria Serif',
                    color: '#202020'
                  }}>
                  Oxean Uedora Jacket
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Inria Serif',
                    color: 'rgba(32, 32, 32, 1)',
                    marginTop: 7
                  }}>
                  Size {''}
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      fontFamily: 'Inria Serif',
                      color: 'rgba(32, 32, 32, 1)'
                    }}>M</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => setQuantity(prev => Math.max(prev - 1, 0))}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#939393',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image source={{ uri: '/Images/minus.png' }} style={{ width: 12, height: 12 }} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, fontWeight: '400', color: '#202020' }}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => setQuantity(prev => prev + 1)}
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#202020',
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#939393',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image source={{ uri: '/Images/plus.png' }} style={{ width: 12, height: 12 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 70
                }}>
                <Image source={{ uri: '/Images/trash.png' }} style={{ width: 20, height: 20 }} />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    fontFamily: 'Inria Serif',
                    color: '#202020',
                  }}>$11.45</Text>
              </View>
            </View>
          </XStack>


          <Separator style={{ marginTop: 8, marginBottom: 8 }} />


          <XStack style={{ flexDirection: 'row', gap: 16 }}>
            <Image source={{ uri: '/Images/suit-jacket.png' }} style={{ width: 91, height: 122 }} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View style={{ width: '220px' }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Inria Serif',
                    color: '#202020'
                  }}>
                  Casual Breeze Suit
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Inria Serif',
                    color: 'rgba(32, 32, 32, 1)',
                    marginTop: 7
                  }}>
                  Size {''}
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      fontFamily: 'Inria Serif',
                      color: 'rgba(32, 32, 32, 1)'
                    }}>M</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => setQuantity(prev => Math.max(prev - 1, 0))}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#939393',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image source={{ uri: '/Images/minus.png' }} style={{ width: 12, height: 12 }} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, fontWeight: '400', color: '#202020' }}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => setQuantity(prev => prev + 1)}
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#202020',
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#939393',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image source={{ uri: '/Images/plus.png' }} style={{ width: 12, height: 12 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 70
                }}>
                <Image source={{ uri: '/Images/trash.png' }} style={{ width: 20, height: 20 }} />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    fontFamily: 'Inria Serif',
                    color: '#202020',
                  }}>$11.45</Text>
              </View>
            </View>
          </XStack>

          <Separator style={{ marginTop: 8, marginBottom: 8 }} />


          <XStack style={{ flexDirection: 'row', gap: 16 }}>
            <Image source={{ uri: '/Images/heels.png' }} style={{ width: 91, height: 122 }} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View style={{ width: '220px' }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Inria Serif',
                    color: '#202020'
                  }}>
                  Casual Breeze Suit
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Inria Serif',
                    color: 'rgba(32, 32, 32, 1)',
                    marginTop: 7
                  }}>
                  Size {''}
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      fontFamily: 'Inria Serif',
                      color: 'rgba(32, 32, 32, 1)'
                    }}>M</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => setQuantity(prev => Math.max(prev - 1, 0))}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#939393',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image source={{ uri: '/Images/minus.png' }} style={{ width: 12, height: 12 }} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, fontWeight: '400', color: '#202020' }}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => setQuantity(prev => prev + 1)}
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#202020',
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#939393',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image source={{ uri: '/Images/plus.png' }} style={{ width: 12, height: 12 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 70
                }}>
                <Image source={{ uri: '/Images/trash.png' }} style={{ width: 20, height: 20 }} />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    fontFamily: 'Inria Serif',
                    color: '#202020',
                  }}>$11.45</Text>
              </View>
            </View>
          </XStack>
        </View>


        {/* Sub Total */}
        <XStack
          style={{
            backgroundColor: '#FFFBF2',
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 20,
            padding: 16,
            marginTop: 42,
            marginLeft: 24,
            marginRight: 24,
            flexDirection: 'column'
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Inria Serif', color: '#444444' }}>Sub Total :</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Inria Serif', color: '#151515' }}>$ 880.000</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12
            }}>
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Inria Serif', color: '#444444' }}>Shipping :</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Inria Serif', color: '#151515' }}>$ 30.000</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12
            }}>
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Inria Serif', color: '#444444' }}>Delivery fee :</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Inria Serif', color: '#151515' }}>$ 25.000</Text>
          </View>

          <View
            style={{
              borderTopWidth: 10,  // Define the width of the top border
              borderStyle: 'dotted',  // Make it a dotted border
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: '#E8E8E8',
              marginTop: 12,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12
            }}>
            <Text style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Inria Serif', color: '#444444' }}>Total :</Text>
            <Text style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Inria Serif', color: '#202020' }}>$ 905.000</Text>
          </View>


        </XStack>

        {/* Button */}
        <Button
          onPress={() => { }}
          style={{
            marginTop: 42,
            marginLeft: 24,
            marginRight: 24,
            backgroundColor: '#E6B022',
            borderRadius: 0,
            padding: 16
          }}>
          <Text 
          style={{ 
            fontSize: 20, 
            fontWeight: '700', 
            fontFamily: 'Inria Serif', 
            color: '#073937' }}>Checkout</Text>
        </Button>

        {/* Recommended For You */}
        <Text 
          style={{ 
            fontSize: 18, 
            fontWeight: '700', 
            color: '#073937',
            fontFamily: 'Inria Serif',
            marginTop: 32,
            marginLeft: 24,
            marginRight: 24
          }}>
          Recommended For You
        </Text>
        <YStack
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 18,
          marginLeft: 24,
          marginRight: 24,
        }}
      >
        <View
          style={{
            position: 'relative',
          }}
        >
          <Text
            style={{
              position: 'absolute',
              top: 16,
              left: 12,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Recommended
          </Text>
          <Image
            source={{ uri: '/Images/darren.png' }}
            style={{ width: 182.5, zIndex: 0, height: 244 }}
          />
          <Image
            source={{ uri: '/Images/heart-icon.png' }}
            style={{ width: 18, height: 18, position: 'absolute', top: 207, left: 146, zIndex: 1 }}
          />
        </View>

        <View
          style={{
            position: 'relative',
          }}
        >
          <Text
            style={{
              position: 'absolute',
              top: 16,
              left: 12,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Recommended
          </Text>
          <Image
            source={{ uri: '/Images/skyblue-bag.png' }}
            style={{ width: 182.5, zIndex: 0, height: 244 }}
          />
          <Image
            source={{ uri: '/Images/heart-icon.png' }}
            style={{ width: 18, height: 18, position: 'absolute', top: 207, left: 146, zIndex: 1 }}
          />
        </View>
      </YStack>
      <YStack flexDirection="row" mx={24} mt={18} gap={38}>
        <XStack flexDirection="column">
          <Text fontSize={16} fontWeight="400" color="#202020">
            Oxean Uedora Jacket
          </Text>

          <View flexDirection="row" gap={5} style={{ marginTop: 8, alignItems: 'flex-end' }}>
            <Text fontSize={14} fontWeight="400"  color="#202020">
              $21.45
            </Text>
            <Text fontSize={10} fontWeight="400" style={{ color: 'rgba(32, 32, 32, 0.3)' }}>
             $21.45
            </Text>
          </View>
        </XStack>

        <XStack flexDirection="column">
          <Text fontSize={16} fontWeight="400" color="#202020">
          Vuki Handi Bag
          </Text>

          <View flexDirection="row" gap={5} style={{ marginTop: 8, alignItems: 'flex-end' }}>
            <Text fontSize={14} fontWeight="400"  color="#202020">
            $16.20
            </Text>
            <Text fontSize={10} fontWeight="400" style={{ color: 'rgba(32, 32, 32, 0.3)' }}>
             $21.45
            </Text>
          </View>
        </XStack>
      </YStack>
      </ScrollView>


      <View style={{ marginTop: 40 }}>
        <Bar />
      </View>
    </>
  )
}
