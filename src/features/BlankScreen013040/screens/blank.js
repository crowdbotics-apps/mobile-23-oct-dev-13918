import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Button
        title="Press me!"
        color="#33ff4b"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor="#48ae24"
        minimumTrackTintColor="#ff3347"
        thumbTintColor="#1b221e"
        style={styles.Slider_4}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Button_3: { color: "#e42121" },
  Slider_4: { width: "100%" },
  View_1: {},
  Text_2: { alignSelf: "center", color: "#e42121" },
  Button_3: { color: "#e42121" },
  Slider_4: { width: "100%" },
  View_1: {},
  Button_3: { color: "#e42121" },
  Slider_4: { width: "100%" }
})
