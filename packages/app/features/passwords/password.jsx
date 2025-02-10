import { Button, View, Text, Input } from '@my/ui'
import { StatusBarz } from '../components/statusbarz'
import Bar from '../components/bar'
import React, { useState } from 'react'

export function HomeScreen() {
  const [email, setEmail] = useState('')

  return (
    <View style={{ backgroundColor: '#FFFBF2' }}>
      <StatusBarz />
      <View>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: '#073937', marginTop: 8 }}>
            Forgot Password?
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
          <Button style={{ width: '100%',
             backgroundColor: 'transparent',
             textDecoration: 'underline',
             color: '#073937',
              borderRadius: 0 }}>
            Resend-Link
          </Button>
        </View>
      </View>
      <View style={{ marginTop: 400 }}>
        <Bar />
      </View>
    </View>
  )
}
