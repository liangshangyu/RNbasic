import React,{Component} from 'react'
import {Text,View,StyleSheet,TabBarIOS,NavigatorIOS} from 'react-native'
import Home from './Component/Home'
import Find from './Component/Find'
import Message from './Component/Message'
import Mine from './Component/Mine'
export default class Main extends Component {
        constructor() {
            super()
            this.state = {
                selectItem:'home'
            }
        }
        render () {
            return (
                <View>
                    <TabBarIOS
                        tintColor='orange'
                    >
                        <TabBarIOS.Item
                            icon={{uri:''}}
                            title='首页'
                            selected={this.state.selectItem === 'home'}
                            onPress = {()=> this.setState({selectItem : 'home'})}
                        >
                            <NavigatorIOS
                                style={{flex:1}}
                                tintColor:'orange'
                                initialRoute = {
                                    {
                                        component:Home,
                                        title:'首页',
                                        leftButtonIcon:require(),
                                        rightButtonIcon:require(),
                                    }
                                }
                            />
                        </TabBarIOS.Item>

                        <TabBarIOS.Item
                            icon={{uri:''}}
                            title='发现'
                            selected={this.state.selectItem === 'find'}
                            onPress = {()=> this.setState({selectItem : 'find'})}
                        >

                        </TabBarIOS.Item>

                        <TabBarIOS.Item
                            icon={{uri:''}}
                            title='消息'
                            selected={this.state.selectItem === 'message'}
                            onPress = {()=> this.setState({selectItem : 'message'})}
                        >

                        </TabBarIOS.Item>

                        <TabBarIOS.Item
                            icon={{uri:''}}
                            title='我'
                            selected={this.state.selectItem === 'mine'}
                            onPress = {()=> this.setState({selectItem : 'mine'})}
                        >

                        </TabBarIOS.Item>
                    </TabBarIOS>
                </View>
            )
        }
}
const styles = StyleSheet.create({
    container:{}
})