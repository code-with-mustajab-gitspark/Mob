import { Button, View, Text, Input, YStack, XStack, Paragraph } from '@my/ui'
import { Image, TouchableOpacity } from 'react-native'
import { StatusBar } from '../components/statusbar'
import Slider from '../components/slider'

import Bar from '../components/bar'
import React, { useState } from 'react'

export function HomeScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isEmailFocused, setEmailFocused] = useState(false)
  const [isPasswordFocused, setPasswordFocused] = useState(false)
  const [isSearchFocused, setSearchFocused] = useState(false)

  return (
    <>
      <StatusBar />

      <YStack
        mx="auto"
        style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 24 }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 100,
            position: 'relative',
          }}
        >
          <Image
            source={{ uri: '/Images/magnify.png' }}
            style={{ width: 18, height: 18, position: 'absolute', left: 16, top: 14 }}
          />
          <Input
            placeholder="Search Product"
            placeholderTextColor="#073937"
            style={{
              backgroundColor: '#F4F5FA',
              fontSize: 16,
              padding: 24,
              height: 48,
              width: 320,
              paddingLeft: 48,
              fontWeight: '300',
              color: '#073937',
              outlineWidth: 0,
              borderRadius: 100,
            }}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </View>
        <Text style={{ backgroundColor: '#F4F5FA', borderRadius: 100, padding: 13 }}>
          <Image source={{ uri: '/Images/shopping-icon.png' }} style={{ width: 19, height: 24 }} />
        </Text>
      </YStack>

      <YStack
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 24,
        }}
      >
        <XStack
          style={{
            backgroundColor: '#073937',
            borderTopLeftRadius: 10, // Rounded top-left corner
            borderBottomLeftRadius: 10, // Rounded bottom-left corner
            flexDirection: 'column',
            width: 241,
            height: 142,
            paddingTop: 30,
            paddingLeft: 24,
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: '700',
            }}
          >
            New Season Essentials
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            Discount up to 50%
          </Text>

          <Button
            style={{
              backgroundColor: '#E6B022',
              borderRadius: 100,
              marginTop: 16,
              color: '#073937',
              fontSize: 12,
              fontWeight: '700',
              width: 86,
              height: 28,
              padding: 10,
            }}
          >
            Get it now
          </Button>
        </XStack>
        <View
          style={{
            borderTopRightRadius: 10, // Rounded top-left corner
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            width: 141,
            height: 142,
            backgroundColor: '#F6F7FB',
          }}
        >
          <Image source={{ uri: '/Images/suit.png' }} style={{ width: 107, height: 142 }} />
        </View>
      </YStack>

      <YStack
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}
      >
        <Text
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#757575',
            borderRadius: 100,
          }}
        ></Text>

        <Text
          style={{
            width: 18,
            height: 18,
            backgroundColor: 'transparent',
            borderWidth: 3,
            borderColor: '#363636',
            borderRadius: 100,
          }}
        ></Text>

        <Text
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#757575',
            borderRadius: 100,
          }}
        ></Text>
      </YStack>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 24,
          marginLeft: 24,
          marginRight: 24,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: '#073937',
          }}
        >
          Best of Ziara!
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#073937',
            textDecorationLine: 'underline',
          }}
        >
          View All
        </Text>
      </View>

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
            color="#202020"
          >
            New
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#202020"
          >
            New
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

      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
        Categories
      </Text>

      <YStack
        style={{
          flexDirection: 'row',
          gap: 14,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
          marginLeft: 24,
          marginRight: 24,
          
        }}
      >
        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: 86
            }}
          >
            <Image source={{ uri: '/Images/orange-bag.png' }} style={{ width: 44, height: 44 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Purse
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/shirtt.png' }} style={{ width: 42, height: 49 }} />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Gift Ideas
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/sandal.png' }} style={{ width: 48, height: 48 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Shoes
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/red-coat.png' }} style={{ width: 39, height: 57 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
           Coats
          </Text>
        </XStack>
      </YStack>



      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 16,
        }}
      >
        <Image source={{ uri: '/Images/banner.png' }} style={{ width: 382, height: 174 }} />
      </View>

      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
        Offers
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#E6B022"
          >
            20%OFF
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#E6B022"
          >
            20%OFF
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
            20%OFF
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#E6B022"
          >
            20%OFF
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


      
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 24,
          marginLeft: 24,
          marginRight: 24,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: '#073937',
          }}
        >
          Blogs
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#073937',
            textDecorationLine: 'underline',
          }}
        >
          View All
        </Text>
      </View>

      <YStack style={{ position: 'relative' }}>
  <XStack
    position="relative"
    width={382}
    height={528}
    style={{
      marginLeft: 24,
      marginRight: 24,
      marginTop: 18
    }}
  >
    <Image
      source={{ uri: '/Images/lady.png' }}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  </XStack>

  <XStack
    flexDirection="column"
    style={{
      position: 'absolute',
      top: 420,
      left: 40,
      width: '100%',
      height: '100%',
    }}
  >
    <Text style={{ fontSize: 22, fontWeight: '700', color: '#FFFFFF' }}>
      Summer Outfits
    </Text>
    <Text style={{ fontSize: 16, fontWeight: '400', color: '#FFFFFF' }}>
      the industry's standard dummy text ever <br />since the 1500s, when an unknown .
    </Text>
    <View style={{ flexDirection: 'row', gap: 14, marginTop: 12, alignItems: 'center' }}>
      <Button
        style={{
          backgroundColor: '#E6B022',
          borderRadius: 100,
          color: '#073937',
          fontSize: 12,
          fontWeight: '700',
          width: 86,
          height: 28,
          padding: 10
        }}>
        Get it now
      </Button>
      <Button
        style={{
          backgroundColor: 'transparent',
          borderRadius: 0,
          color: '#FFFFFF',
          fontSize: 12,
          fontWeight: '700',
          textDecorationLine: 'underline'
        }}>
        Learn More
      </Button>
    </View>
  </XStack>
</YStack>



      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
        Hot Products
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Hot
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Hot
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
            color="#FF3636"
          >
            Hot
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Hot
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
            color="#FF3636"
          >
            Hot
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Hot
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
            color="#FF3636"
          >
            Hot
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
              left: 16,
              fontSize: 14,
              fontWeight: '700',
              zIndex: 1,
            }}
            color="#FF3636"
          >
            Hot
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

      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
        Whats On Sale
      </Text>

      <View 
      flexDirection="row"
      mt={18} 
      gap={16}
      style={{ marginLeft: 24 }}>
        <Image 
        source={{ uri: '/Images/row-1.png' }}
        style={{ width: 140, height: 186 }} />
        <Image 
        source={{ uri: '/Images/row-2.png' }}
        style={{ width: 140, height: 186 }} />
        <Image 
        source={{ uri: '/Images/row-3.png' }}
        style={{ width: 94, height: 186 }} />
      </View>
      
      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
        Weekly Sale
      </Text>

      <YStack
      style={{ marginTop: 18, marginLeft: 24 }} flexDirection='row' gap={16}>
        <View flexDirection="row" gap={16} style={{ position: 'relative' }}>
          <Image 
          source={{ uri: '/Images/clothes.png' }}
          style={{ width: 183, height: 133, borderRadius: 10 }} />
          <Text 
          fontSize={15} 
          fontWeight="700" 
          color="#FFFFFF" 
          style={{ position: 'absolute', 
          top: 10, left: 20 }}>
            Modern Womas <br />
            Collection
          </Text>
        </View>

        <View flexDirection="row" gap={16} style={{ position: 'relative' }}>
          <Image 
          source={{ uri: '/Images/accesories.png' }}
          style={{ width: 183, height: 133, borderRadius: 10 }} />
          <Text 
          fontSize={15} 
          fontWeight="700" 
          color="#FFFFFF" 
          style={{ position: 'absolute', 
          top: 0, left: 0,
           backgroundColor: 'rgba(0, 0, 0, 0.1)',
           width: 183,
           height: 60,
           borderRadius: 10,
           paddingLeft: 24,
           paddingTop: 10,
           borderBottomLeftRadius: 0,
           borderBottomRightRadius: 0 }}>
            Best Brands <br />
            Collection
          </Text>
        </View>
      </YStack>

      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
        Category 2
      </Text>




      <YStack
        style={{
          flexDirection: 'row',
          gap: 14,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
          marginLeft: 24,
          marginRight: 24,
          
        }}
      >
        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: 86
            }}
          >
            <Image source={{ uri: '/Images/orange-bag.png' }} style={{ width: 44, height: 44 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Purse
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/shirtt.png' }} style={{ width: 42, height: 49 }} />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Gift Ideas
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/sandal.png' }} style={{ width: 48, height: 48 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Shoes
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/red-coat.png' }} style={{ width: 39, height: 57 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
           Coats
          </Text>
        </XStack>
      </YStack>


      <YStack
        style={{
          flexDirection: 'row',
          gap: 14,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
          marginLeft: 24,
          marginRight: 24,
          
        }}
      >
        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: 86
            }}
          >
            <Image source={{ uri: '/Images/orange-bag.png' }} style={{ width: 44, height: 44 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Purse
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/shirtt.png' }} style={{ width: 42, height: 49 }} />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Gift Ideas
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/sandal.png' }} style={{ width: 48, height: 48 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Shoes
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/red-coat.png' }} style={{ width: 39, height: 57 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
           Coats
          </Text>
        </XStack>
      </YStack>



      <YStack
        style={{
          flexDirection: 'row',
          gap: 14,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
          marginLeft: 24,
          marginRight: 24,
          
        }}
      >
        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: 86
            }}
          >
            <Image source={{ uri: '/Images/orange-bag.png' }} style={{ width: 44, height: 44 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Purse
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/shirtt.png' }} style={{ width: 42, height: 49 }} />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Gift Ideas
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/sandal.png' }} style={{ width: 48, height: 48 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            Shoes
          </Text>
        </XStack>

        <XStack
          style={{
            gap: 14,
            flexDirection: 'column',
            height: 102
          }}
        >
          <View
            style={{
              backgroundColor: '#F4F5FA',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              width: 81,
              height: '100%'
            }}
          >
            <Image source={{ uri: '/Images/red-coat.png' }} style={{ width: 39, height: 57 }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#202020',
              marginTop: 4,
              textAlign: 'center',
            }}
          >
           Coats
          </Text>
        </XStack>
      </YStack>


      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 32,
        }}
      >
        <Image source={{ uri: '/Images/banner-2.png' }} style={{ width: 382, height: 174 }} />
      </View>

      <Text
        fontSize={22}
        fontWeight="700"
        style={{ marginTop: 24, marginLeft: 24, color: '#073937' }}
      >
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

      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 24,
        }}
      >
        <Image source={{ uri: '/Images/banner-3.png' }} style={{ width: 382, height: 238 }} />
      </View>

      <View style={{ marginTop: 340 }}>
        <Bar />
      </View>
    </>
  )
}
