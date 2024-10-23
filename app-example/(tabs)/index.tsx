import { View, Text, StyleSheet, ImageBackground } from 'react-native'
// import { IMG_1281 } from "@/assets/images/IMG_1281.JPG";


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/potato.webp')}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Тортики</Text>
      </ImageBackground>
    </View>
  )
}

export default app


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  }
})
