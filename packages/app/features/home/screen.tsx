import { Button, View, Text, Input, YStack, XStack, Separator } from '@my/ui'
import { Image, ScrollView } from 'react-native'
import { StatusBar } from '../components/statusbar'
import Bar from '../components/bar'
import React, { useState } from 'react'

export function HomeScreen() {
  const [isSearchFocused, setSearchFocused] = useState(false)
  const percentage = 85
  const percentage2 = 45
  const percentage3 = 20
  const percentage4 = 10
  const percentage5 = 2


  return (
    <>
      <StatusBar />
      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
        {/* Product Image and Details */}
        <View style={{ alignItems: 'center', padding: 16, position: 'relative' }}>
          <Image
            source={{ uri: '/Images/coat-shirt.png' }} // Replace with actual image URI
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
            <Text style={{ color: '#202020', fontSize: 18, fontWeight: '700' }}>←</Text>
          </Button>
          <Image
            source={{ uri: '/Images/heart-icon.png' }}
            style={{ width: 24, height: 24, position: 'absolute', top: 36, right: 24 }}
          />
          <Image
            source={{ uri: '/Images/Bag.png' }}
            style={{ width: 22.8, height: 24, position: 'absolute', top: 36, right: 66 }}
          />
          <XStack style={{ position: 'absolute', top: 476, right: 187, gap: 8 }}>
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
          <Text style={{ fontSize: 14, fontWeight: '400', color: 'rgba(30, 30, 30, 1)' }}>
            ⭐ 4.9
            <Text
              style={{
                color: 'rgba(107, 107, 107, 1)',
              }}
            >
              {''} (42 reviews)
            </Text>
          </Text>

          <Text style={{ fontSize: 20, fontWeight: '400', color: 'rgba(32, 32, 32, 1)' }}>
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
          }}
        >
          Casual Breeze Suit
        </Text>
        {/* Size and Color Selection */}

        <View style={{ marginTop: 24, marginLeft: 24, marginRight: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'rgba(32, 32, 32, 1)' }}>
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

          <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 16 }}>Color</Text>
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
            <Text style={{ fontSize: 14, fontWeight: '700', color: '#1B1B1B' }}>
              Get it Tomorrow
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: '#202020', marginTop: 4 }}>
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
          <Text style={{ fontSize: 14, fontWeight: '700', color: '#1B1B1B' }}>
            Earn 5% Cashback with the Credit Card <br />
            Payment
          </Text>
        </XStack>

        {/* Add to Cart Button */}
        <View style={{ paddingHorizontal: 16, marginTop: 24, marginLeft: 24, marginRight: 24 }}>
          <Button
            style={{
              backgroundColor: '#E6B022',
              padding: 16,
              fontSize: 20,
              fontWeight: '700',
              color: '#073937',
              borderRadius: 0,
            }}
          >
            Add to Cart
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
        </YStack>

        <YStack flexDirection="row" mx={24} mt={18} gap={38}>
          <View>
            <Text fontSize={16} fontWeight="400" color="#202020">
              Oxean Uedora Jacket
            </Text>

            <Text fontSize={14} fontWeight="400" style={{ marginTop: 8 }} color="#202020">
              $21.45
            </Text>
          </View>

          <View>
            <Text fontSize={16} fontWeight="400" color="#202020">
              Vuki Handi Bag
            </Text>

            <Text fontSize={14} fontWeight="400" style={{ marginTop: 8 }} color="#202020">
              $16.20
            </Text>
          </View>
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
            <Text style={{ fontSize: 40, fontWeight: '700', color: '#202020' }}>4.5</Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: 'rgba(32, 32, 32, 1)',
                marginTop: 20,
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
              }}
            >
              {' '}
              Out of 5
            </Text>
          </View>
        </YStack>

        <YStack style={{ marginTop: 30, marginLeft: 24, marginRight: 24 }}>
          <XStack style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020'
              }}>5  ⭐</Text>
              <View style={{  marginLeft: 10, marginRight: 20 }}>
                <View style={{ height: 4, width: 276, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 8 }}>
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
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020' }}>
               85%
              </Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
              <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020'
              }}>4  ⭐</Text>
              <View style={{  marginLeft: 10, marginRight: 20 }}>
                <View style={{ height: 4, width: 276, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 8 }}>
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
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020' }}>
               45%
              </Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
              <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020'
              }}>3  ⭐</Text>
              <View style={{  marginLeft: 10, marginRight: 20 }}>
                <View style={{ height: 4, width: 276, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 8 }}>
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
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020' }}>
               20%
              </Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
              <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020'
              }}>2  ⭐</Text>
              <View style={{  marginLeft: 10, marginRight: 20 }}>
                <View style={{ height: 4, width: 276, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 8 }}>
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
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020' }}>
              10%
              </Text>
          </XStack>

          <XStack style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
              <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#202020'
              }}>1  ⭐</Text>
              <View style={{  marginLeft: 10, marginRight: 27 }}>
                <View style={{ height: 4, width: 276, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 8 }}>
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
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#202020' }}>
               2%
              </Text>
          </XStack>
        </YStack>

        {/* Reviews Section */}
        <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>Reviews</Text>
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: '400' }}>Jhon Rolly: ⭐⭐⭐⭐⭐</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              This jacket is very comfortable. I love it!
            </Text>
          </View>
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: '400' }}>Edward Colin: ⭐⭐⭐⭐</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              I am very satisfied with this jacket because it fits well. Thank you!
            </Text>
          </View>
        </View>

        {/* Percentage Line */}
        
      </ScrollView>

      <View style={{ marginTop: 340 }}>
        <Bar />
      </View>
    </>
  )
}
