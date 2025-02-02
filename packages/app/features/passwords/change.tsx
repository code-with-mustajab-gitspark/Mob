import { Button, View, Text, Input } from '@my/ui'
import { TouchableOpacity, Image } from 'react-native'
import { StatusBar } from '../components/statusbar'
import Bar from '../components/bar'
import React, { useState } from 'react'

export function ChangePasswordScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isEmailFocused, setEmailFocused] = useState(false)
  const [isPasswordFocused, setPasswordFocused] = useState(false)

  return (
    <>
      <StatusBar />
      <View>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: '#073937', marginTop: 8 }}>
            Change new Password
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

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#073937',
              marginTop: 32,
            }}
          >
            Confirm Password
          </Text>

          <Input
            placeholder="Type your password"
            secureTextEntry={!passwordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />

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
            Send Link
          </Button>
        </View>
      </View>
      <View style={{ marginTop: 340 }}>
        <Bar />
      </View>
    </>
  )
}
