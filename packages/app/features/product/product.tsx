import { Button, View, Text, Input, YStack, XStack, Separator } from '@my/ui'
import { Image, ScrollView, Keyboard, Modal, TouchableOpacity } from 'react-native'
import { StatusBar } from '../components/statusbar'
import Bar from '../components/bar'
import React, { useState } from 'react'
import { Link } from 'solito/link'

interface ProductScreenProps {
  pagesMode?: boolean
}

export function ProductScreen({ pagesMode }: ProductScreenProps) {
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

      {/* Popup Notification */}
      {isPopupVisible && (
          <View
            style={{
              backgroundColor: '#202020',
              padding: 10,
              alignItems: 'center',
              borderRadius: 0,
              zIndex: 1000,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontWeight: '400', fontSize: 16 }}>Added to Cart</Text>
            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, textDecorationLine: 'underline' }}>VIEW CART</Text>
          </View>
        )}

      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
        {/* Product Image and Details */}
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 16,
            paddingRight: 16,
            paddingLeft: 16,
            position: 'relative',
          }}
        >
          <Image
            source={{ uri: '/Images/coat-shirt.png' }}
            style={{ width: 430, height: 487, resizeMode: 'contain' }}
          />
          <Button
            style={{
              backgroundColor: '#FFFBF2',
              position: 'absolute',
              top: 32,
              left: 24,
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
          <Image
            source={{ uri: '/Images/heart-icon.png' }}
            style={{ width: 24, height: 24, position: 'absolute', top: 36, right: 24 }}
          />
          <Image
            source={{ uri: '/Images/Bag.png' }}
            style={{ width: 22.8, height: 24, position: 'absolute', top: 36, right: 66 }}
          />
          <XStack style={{ position: 'absolute', top: 460, right: 187, gap: 8 }}>
            <View
              style={{ width: 8, height: 8, backgroundColor: '#073937', borderRadius: 100 }}
            ></View>
            <View
              style={{ width: 8, height: 8, backgroundColor: '#00000033', borderRadius: 100 }}
            ></View>
            <View
              style={{ width: 8, height: 8, backgroundColor: '#00000033', borderRadius: 100 }}
            ></View>
            <View
              style={{ width: 8, height: 8, backgroundColor: '#00000033', borderRadius: 100 }}
            ></View>
          </XStack>
        </View>

        <YStack
          style={{
            marginTop: 32,
            marginLeft: 24,
            marginRight: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'rgba(30, 30, 30, 1)',
              fontFamily: 'Urbanist',
            }}
          >
            ⭐ 4.9
            <Text
              style={{
                color: 'rgba(107, 107, 107, 1)',
                fontFamily: 'Urbanist',
              }}
            >
              {''} (42 reviews)
            </Text>
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: 'rgba(32, 32, 32, 1)',
              fontFamily: 'Urbanist',
            }}
          >
            $32.41
          </Text>
        </YStack>

        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: 'rgba(27, 27, 27, 1)',
            marginTop: 8,
            marginLeft: 24,
            fontFamily: 'Urbanist',
          }}
        >
          Casual Breeze Suit
        </Text>
        {/* Size and Color Selection */}

        <View style={{ marginTop: 24, marginLeft: 24, marginRight: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: 'rgba(32, 32, 32, 1)',
              fontFamily: 'Urbanist',
            }}
          >
            Size
          </Text>
          <XStack style={{ gap: 8 }}>
            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                backgroundColor: '#E6B022',
                fontSize: 10,
                fontWeight: '700',
                color: '#073937',
                marginTop: 8,
                fontFamily: 'Urbanist',
              }}
            >
              S (20)
            </Button>

            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'rgba(202, 202, 202, 1)',
                fontSize: 10,
                fontWeight: '700',
                color: '#073937',
                marginTop: 8,
                fontFamily: 'Urbanist',
              }}
            >
              M (0)
            </Button>

            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'rgba(202, 202, 202, 1)',
                fontSize: 10,
                fontWeight: '700',
                color: '#073937',
                marginTop: 8,
                fontFamily: 'Urbanist',
              }}
            >
              L (23)
            </Button>

            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'rgba(202, 202, 202, 1)',
                fontSize: 10,
                fontWeight: '700',
                color: '#073937',
                marginTop: 8,
              }}
            >
              XL (12)
            </Button>
          </XStack>

          <Text
            style={{ fontSize: 16, fontWeight: '600', marginTop: 16, fontFamily: 'Inria Serif' }}
          >
            Color
          </Text>
          <XStack style={{ gap: 8 }}>
            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                backgroundColor: '#202020',
                fontSize: 10,
                fontWeight: '400',
                color: '#FFFFFF',
                marginTop: 8,
              }}
            >
              SELECTED
            </Button>

            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'rgba(202, 202, 202, 1)',
                backgroundColor: '#3943FF',
                marginTop: 8,
              }}
            ></Button>

            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'rgba(202, 202, 202, 1)',
                backgroundColor: '#FF0000',
                marginTop: 8,
              }}
            ></Button>

            <Button
              style={{
                width: 90,
                height: 32,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'rgba(202, 202, 202, 1)',
                backgroundColor: '#0A740D',
                marginTop: 8,
              }}
            ></Button>
          </XStack>
        </View>

        {/* Delivery and Cashback */}

        <XStack
          style={{
            padding: 16,
            marginTop: 24,
            marginLeft: 24,
            borderWidth: 1,
            borderColor: '#DEDEDE',
            backgroundColor: '#FFFBF2',
            marginRight: 24,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <Image source={{ uri: '/Images/delivery.png' }} style={{ width: 47, height: 47 }} />
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#1B1B1B',
                fontFamily: 'Inria Serif',
              }}
            >
              Get it Tomorrow
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#202020',
                marginTop: 4,
                fontFamily: 'Inria Serif',
              }}
            >
              Order in 3 h 54 m
            </Text>
          </View>
        </XStack>

        <XStack
          style={{
            padding: 16,
            marginTop: 24,
            marginLeft: 24,
            borderWidth: 1,
            borderColor: '#DEDEDE',
            backgroundColor: '#FFFBF2',
            marginRight: 24,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <Image source={{ uri: '/Images/atm.png' }} style={{ width: 47, height: 47 }} />
          <Text
            style={{ fontSize: 14, fontWeight: '700', color: '#1B1B1B', fontFamily: 'Inria Serif' }}
          >
            Earn 5% Cashback with the Credit Card <br />
            Payment
          </Text>
        </XStack>

        {/* Add to Cart Button */}
        <View style={{ paddingHorizontal: 16, marginTop: 24, marginLeft: 24, marginRight: 24 }}>
          <Button
            onPress={handleAddToCart}
            style={{
              backgroundColor: '#E6B022',
              padding: 16,
              fontSize: 20,
              fontWeight: '700',
              color: '#073937',
              borderRadius: 0,
              fontFamily: 'Inria Serif',
            }}
          >
            Add to Cart --
          </Button>
        </View>

        

        {/* Recommended Products Section */}
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

        

        <Separator
          style={{ marginTop: 30, marginLeft: 24, marginRight: 24, color: '#EAEAEA', height: 1 }}
        />

        {/* Rating and Reviews */}

        <YStack
          style={{
            marginTop: 30,
            marginLeft: 24,
            marginRight: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Text style={{ fontSize: 40, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>4.5</Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: 'rgba(32, 32, 32, 1)',
                marginTop: 20,
                fontFamily: 'Inria Serif'
              }}
            >
              {' '}
              Out of 5
            </Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Image source={{ uri: '/Images/stars.png' }} style={{ width: 116, height: 22 }}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: 'rgba(32, 32, 32, 1)',
                textAlign: 'right',
                fontFamily: 'Inria Serif'
              }}
            >
              {' '}
              211 ratings
            </Text>
          </View>
        </YStack>

        {/* Percentage Line */}

        <YStack style={{ marginTop: 30, marginLeft: 24, marginRight: 24 }}>
          <XStack style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020',
                fontFamily: 'Inria Serif'
              }}
            >
              5 ⭐
            </Text>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <View
                style={{
                  height: 4,
                  width: 276,
                  backgroundColor: '#E0E0E0',
                  borderRadius: 5,
                  marginTop: 8,
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: `${percentage}%`,
                    backgroundColor: '#073937',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>85%</Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020',
                fontFamily: 'Inria Serif'
              }}
            >
              4 ⭐
            </Text>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <View
                style={{
                  height: 4,
                  width: 276,
                  backgroundColor: '#E0E0E0',
                  borderRadius: 5,
                  marginTop: 8,
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: `${percentage2}%`,
                    backgroundColor: '#073937',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>45%</Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020',
                fontFamily: 'Inria Serif'
              }}
            >
              3 ⭐
            </Text>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <View
                style={{
                  height: 4,
                  width: 276,
                  backgroundColor: '#E0E0E0',
                  borderRadius: 5,
                  marginTop: 8,
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: `${percentage3}%`,
                    backgroundColor: '#073937',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>20%</Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020',
                fontFamily: 'Inria Serif'
              }}
            >
              2 ⭐
            </Text>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <View
                style={{
                  height: 4,
                  width: 276,
                  backgroundColor: '#E0E0E0',
                  borderRadius: 5,
                  marginTop: 8,
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: `${percentage4}%`,
                    backgroundColor: '#073937',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>10%</Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020',
                fontFamily: 'Inria Serif'
              }}
            >
              1 ⭐
            </Text>
            <View style={{ marginLeft: 10, marginRight: 27 }}>
              <View
                style={{
                  height: 4,
                  width: 276,
                  backgroundColor: '#E0E0E0',
                  borderRadius: 5,
                  marginTop: 8,
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: `${percentage5}%`,
                    backgroundColor: '#073937',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020', fontFamily: 'Inria Serif' }}>2%</Text>
          </XStack>
        </YStack>

        <XStack
          style={{
            marginTop: 25,
            marginLeft: 24,
            marginRight: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'rgba(7, 57, 55, 1)'}}>
            520 Review
          </Text>
          <View
            onPress={() => setSheetVisible(true)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
          >
            <Text style={{ fontSize: 14, fontWeight: '600', color: 'rgba(77, 77, 77, 1)' }}>
              Write for you
            </Text>
            <Image source={{ uri: '/Images/edit.png' }} style={{ width: 13, height: 13 }}></Image>
          </View>
        </XStack>

        <YStack
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 15,
            marginTop: 16,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <Image source={{ uri: '/Images/people-1.png' }} style={{ width: 40, height: 40 }}></Image>
          <XStack flexDirection="column" gap={5}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#202020' }}>Jhon Rolly</Text>
            <Image
              source={{ uri: '/Images/stars-2.png' }}
              style={{ width: 63, height: 11 }}
            ></Image>
          </XStack>
          <Text style={{ fontSize: 8, fontWeight: '600', color: 'rgba(32, 32, 32, 1)' }}>
            5 OUT OF 5, May 15, 2022
          </Text>
        </YStack>
        <Text
          style={{
            fontSize: 10,
            fontWeight: '500',
            color: 'rgba(77, 77, 77, 1)',
            marginTop: 10,
            marginLeft: 79,
          }}
        >
          This jacket is very comfortable when I wear it for riding, <br />
          not hot and very cool for people to see.
        </Text>
        <Separator
          style={{ marginTop: 21, marginLeft: 24, marginRight: 24, color: 'C4C4C4', height: 3 }}
        />

        <YStack
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 15,
            marginTop: 16,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <Image source={{ uri: '/Images/people-2.png' }} style={{ width: 40, height: 40 }}></Image>
          <XStack flexDirection="column" gap={5}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#202020' }}>Edward Collin</Text>
            <Image
              source={{ uri: '/Images/stars-2.png' }}
              style={{ width: 63, height: 11 }}
            ></Image>
          </XStack>
          <Text style={{ fontSize: 8, fontWeight: '600', color: 'rgba(32, 32, 32, 1)' }}>
            4 OUT OF 5, May 5, 2022
          </Text>
        </YStack>
        <Text
          style={{
            fontSize: 10,
            fontWeight: '500',
            color: 'rgba(77, 77, 77, 1)',
            marginTop: 10,
            marginLeft: 79,
          }}
        >
          I am very satisfied with ordering this jacket because it <br />
          fits what I want, thank you.
        </Text>
        <Separator
          style={{ marginTop: 21, marginLeft: 24, marginRight: 24, color: 'C4C4C4', height: 3 }}
        />

        <YStack
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 15,
            marginTop: 16,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <Image source={{ uri: '/Images/people-2.png' }} style={{ width: 40, height: 40 }}></Image>
          <XStack flexDirection="column" gap={5}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#202020' }}>Edward Collin</Text>
            <Image
              source={{ uri: '/Images/stars-2.png' }}
              style={{ width: 63, height: 11 }}
            ></Image>
          </XStack>
          <Text style={{ fontSize: 8, fontWeight: '600', color: 'rgba(32, 32, 32, 1)' }}>
            4 OUT OF 5, May 5, 2022
          </Text>
        </YStack>
        <Text
          style={{
            fontSize: 10,
            fontWeight: '500',
            color: 'rgba(77, 77, 77, 1)',
            marginTop: 10,
            marginLeft: 79,
          }}
        >
          I am very satisfied with ordering this jacket because it <br />
          fits what I want, thank you.
        </Text>
        <Separator
          style={{ marginTop: 21, marginLeft: 24, marginRight: 24, color: 'C4C4C4', height: 3 }}
        />
      </ScrollView>

      <Text
        style={{ fontSize: 16, 
          fontWeight: '700', 
          color: '#202020', 
          marginTop: 32, 
          marginLeft: 24,
          fontFamily: 'Inria Serif'
         }}
      >
        Add on
      </Text>

      {/* Add on Products Section */}
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

      {/* Bottom Sheet */}
      <Modal
        visible={isSheetVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSheetVisible(false)}
      >
        <View
          style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 24,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Text
              onPress={() => setSheetVisible(false)}
                style={{
                  width: 48,
                  height: 5,
                  borderRadius: 100,
                  backgroundColor: '#464646',
                }}
              ></Text>
            </TouchableOpacity>{' '}
            <Text style={{ fontSize: 20, fontWeight: '700', fontFamily: 'Inria Serif' }}>
              Rate & Review
            </Text>
            <Image
              source={{ uri: '/Images/suit-jacket.png' }}
              style={{
                width: 120,
                height: 137,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 27,
              }}
            />
            <Text
              style={{
                marginTop: 16,
                fontSize: 16,
                fontWeight: '400',
                color: 'rgba(32, 32, 32, 1)',
                textAlign: 'center',
                fontFamily: 'Inria Serif',
              }}
            >
              How was your experience shopping with us?
            </Text>
            <XStack style={{ marginTop: 34, marginLeft: 'auto', marginRight: 'auto' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <View key={star} onPress={() => setRating(star)}>
                  <Text style={{ fontSize: 30, color: star <= rating ? '#FFD700' : '#CCCCCC' }}>
                    ★
                  </Text>
                </View>
              ))}
            </XStack>
            <View
              style={{
                marginTop: 34,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#1B1B1B',
                  fontFamily: 'Inria Serif',
                }}
              >
                NOTES
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#1B1B1B',
                  fontFamily: 'Inria Serif',
                }}
              >
                0/1200
              </Text>
            </View>
            <Input
              value={notes}
              onChangeText={setNotes}
              maxLength={1200}
              multiline={true}
              style={{
                height: 129,
                borderColor: '#CCCCCC',
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 8,
                textAlignVertical: 'top',
              }}
            />
            <Button
              onPress={handleSubmitFeedback}
              style={{ backgroundColor: '#E6B022', padding: 10, borderRadius: 0, marginTop: 24 }}
            >
              <Text
                style={{
                  color: '#073937',
                  fontSize: 20,
                  fontWeight: '700',
                  fontFamily: 'Inria Serif',
                }}
              >
                Submit Feedback
              </Text>
            </Button>
          </View>
        </View>
      </Modal>

      <View style={{ marginTop: 52 }}>
        <Bar />
      </View>
    </>
  )
}
