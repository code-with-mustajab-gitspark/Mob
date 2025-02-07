import { Button, View, Text, Input,  } from '@my/ui'
import { TouchableOpacity, Image } from 'react-native'
import { StatusBarz } from '../components/statusbarz'
import Bar from '../components/bar'
import React, { useState } from 'react'

export function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isEmailFocused, setEmailFocused] = useState(false)
  const [isPasswordFocused, setPasswordFocused] = useState(false)

  return (
    <View style={{ backgroundColor: '#FFFBF2' }}>
      <StatusBarz />
      <View>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: '#073937', marginTop: 8 }}>
            Sign in with Email
          </Text>

          <Text style={{ color: '#073937', fontSize: 16, fontWeight: '400', marginTop: 4 }}>
            Input your registered account!
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#073937',
              marginTop: 32,
            }}
          >
            Email
          </Text>

          <Input
            style={{
              padding: 16,
              fontSize: 16,
              fontWeight: '300',
              color: '#073937',
              borderRadius: 0,
              marginTop: 8,
              borderWidth: 1,
              borderColor: '#CAC4CB',
              backgroundColor: '#FFFFFF',
            }}
            placeholder="Type your email"
            value={email}
            onChangeText={setEmail}
          />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#073937',
              marginTop: 32,
            }}
          >
            Password
          </Text>

          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: 16,
              fontWeight: '300',
              color: '#073937',
              borderRadius: 0,
              marginTop: 8,
              borderWidth: isPasswordFocused ? 0 : 1,
              borderColor: '#CAC4CB',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Input
              placeholder="Type your password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              style={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 16,
                borderRadius: 0,
                width: '100%',
              }}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={{
                position: 'absolute',
                right: 16,
                top: 60,
                transform: [{ translateY: -50 }],
              }}
            >
              <Text>{passwordVisible ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                color: '#073937',
                marginTop: 8,
                fontSize: 16,
                fontWeight: '400',
                textAlign: 'right',
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>

          <Button
            style={{
              marginTop: 42,
              width: '100%',
              backgroundColor: '#E6B022',
              borderRadius: 0,
              padding: 16,
              fontSize: 20,
              fontWeight: '700',
              color: '#073937',
            }}
          >
            Sign In
          </Button>

          <View style={{ flexDirection: 'row', alignItems: 'center',  gap: 16, marginTop: 32 }}>
            <View style={{ flex: 1, height: 1, width: 140, backgroundColor: '#E6E6E8' }} />
            <Text
              style={{ color: '#898996', fontSize: 16, fontWeight: '400' }}
            >
              Or
            </Text>
            <View style={{ flex: 1, 
              height: 1,
               width: 140,
                backgroundColor: '#E6E6E8' }} />
          </View>

          <Button
          style={{
            marginTop: 32,
            borderWidth: 1,
            borderColor: '#CAC4BC',
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: 0,
            padding: 16,
          }}
          >
            <Image 
            source={{uri: '/Images/apple.png'}}
             style={{ width: 18,
              height: 18 }} />

            <Text style={{ color: '#073937', 
              fontSize: 14,
               fontWeight: '400' }}>Sign in with Apple</Text>
          </Button>
          
          <Button
          style={{
            marginTop: 16,
            borderWidth: 1,
            borderColor: '#CAC4BC',
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: 0,
            padding: 16,
          }}
          >
            <Image 
            source={{uri: '/Images/google.png'}}
             style={{ width: 24,
              height: 24 }} />

            <Text style={{ color: '#073937', 
              fontSize: 14,
               fontWeight: '400' }}>Sign in with Apple</Text>
          </Button>

          <Text style={{ textAlign: 'center',
             marginTop: 32,
             fontSize: 16,
             fontWeight: '400',
             color: '#636363' }}>
            Don't have an account? <Text style={{ color: '#073937' }}>Sign up here</Text>
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 70 }}>
        <Bar />
      </View>
    </View>
  )
}
