import * as React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, ButtonGroup, } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { BackgroundImage } from '@rneui/base';
import HomeScreen from '../Screen/HomeScreen';
import ChatScreen from '../Screen/ChatScreen';
import AdmireScreen from '../Screen/AdmireScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function Profile2({ navigation }) {
    const homeName = "Home";
const chatName = "chat";
const admireName = "admire";
const profileName = "profile";
    return (
       
        <View style={{ flex: 1,backgroundColor:"#FFFF" }}>
            <ImageBackground source={require('../img/lll111.png')}
                style={{
                    width: 422,
                    height: 274,
                    marginLeft: 0
                }}>


                {/* รูปและชื่อจากหลังบ้าน */}

                <Text></Text>
                <Text></Text>



                <View style={styles.imageContainer}>
                    <Image source={require('../img/Add.png')}
                        style={{
                            left: 335,
                            marginTop: 0,
                        }}>
                    </Image>

                </View>
            </ImageBackground>

            <Text
                style={{
                    fontSize: 18,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    textAlign: "center",
                    marginTop:25

                }}>โปรไฟล์ของคุณ</Text>




            <View style={styles.container2}>


                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        color: '#000000',
                        left: 25,
                        padding: 6
                    }}>ชื่อ
                </Text>

                <Button
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 200,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>
                    <Image source={require('../img/iconlockopen.png')}>
                    </Image>
                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 17.5,
                            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                            left: 15
                        }}>ความเป็นส่วนตัว</Text>
                </Button>


                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        color: '#000000',
                        left: 25,
                        padding: 6
                    }}>การทำรายการ
                </Text>
                <Button
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 165,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>
                    <Image source={require('../img/iconcredit.png')}>

                    </Image>
                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 17.5,
                            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                            left: 15
                        }}>การเติมเงิน</Text>
                </Button>
               
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        left: 15,
                        color: '#000000',
                        left: 25,
                        padding: 6
                    }}>เกี่ยวกับแอป
                </Text>
                <Button
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 190,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>
                    <Image source={require('../img/iconwarningcircle.png')}>

                    </Image>
                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 17.5,
                            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                            left: 15
                        }}>รายงานปัญหา</Text>
               </Button>
               <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        left: 15,
                        color: '#000000',
                        left: 25,
                        padding: 6
                    }}>เกี่ยวกับแอป
                </Text>
                <Button
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 190,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>
                    <Image source={require('../img/iconwarningcircle.png')}>

                    </Image>
                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 17.5,
                            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                            left: 15
                        }}>รายงานปัญหา</Text>
               </Button>
            </View>

        
        
    
    
    
       
        </View>
    );
}
const styles = StyleSheet.create({
    container2: {
        width: 390,
        alignSelf: "center",
        marginTop: 0,
        marginBottom:20,
        marginTop:10,
        backgroundColor:"#FFFF"
    },
    imageContainer: {
        marginTop: -120,
        backgroundColor:"#FFFF"
    }
})
