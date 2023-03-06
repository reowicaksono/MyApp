import { StyleSheet,View, Text } from 'react-native'
import React, {useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ViewPager from '@react-native-community/viewpager'

import PageOnboarding from '../../components/PageOnboarding'
import Footer from '../../components/Footer'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
  const pageReff = useRef(null)
  const handlePage = pageNumber => {
        pageReff.current.setPage(pageNumber)
  }
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pageReff}>
        <View key="1">
          <PageOnboarding
            backgroundColor="#ffc93c"
            iconName="sun"
            title="Welcome to the weather app"
          />
          <Footer
            backgroundColor="#ffc93c"
            rightButtonLabel="Next"
            rightButtonPress={() => handlePage(1)}
          />
        </View>
        <View key="2">
          <PageOnboarding
            backgroundColor="#07689f"
            iconName="cloud-drizzle"
            title="Get updates on weather"
          />
          <Footer
            backgroundColor="#07689f"
            rightButtonLabel="Continue"
            rightButtonPress={() => navigation.replace('Login')}
            leftButtonPress={() => handlePage(0)}
            leftButtonLabel="Back"
          />
        </View>
      </ViewPager>
    </View>
  )
}

export default Onboarding

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  }
})
