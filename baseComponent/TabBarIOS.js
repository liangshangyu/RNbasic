/**
 * 仅适用于IOS
* TabBarIOS TabBarIOS.Item
 *
 * TabBarIOS常用属性 View barTintColor
 * abBarIOS.Item常用属性 badge (number) icon  onPress selected  selectedIcon style title
 * systemIcon  系统图标 和自定义icon互斥
* */
import React,{Component} from 'react'
import {Text,View,TabBarIOS,StyleSheet} from 'react-native'
export default class TabBarIOSDemo extends Component {
        constructor() {
            super()
            this.state = {
                selectedTabBarItem:'home'  //默认被选中
            }
        }
        render () {
            return (
                <View style={styles.container}>
                    <View>
                        <Text>Tab选项卡切换</Text>
                    </View>
                    <TabBarIOS
                        barTintColor='black'
                        tintColor='steelblue' //选中时候的前景色
                        style={{width:375}}  //宽度非必须
                    >
                        <TabBarIOS.Item
                            systemIcon='contacts'
                            badge="3"
                            selected={this.state.selectedTabBarItem === 'home'}
                            onPress={() => this.setState({selectedTabBarItem:'home'})}
                        >
                            <View style={styles.commonViewStyle}>
                                <Text>首页</Text>
                            </View>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon='bookmarks'
                            selected={this.state.selectedTabBarItem === 'second'}
                            onPress={() => this.setState({selectedTabBarItem:'second'})}
                        >
                            <View style={styles.commonViewStyle}>
                                <Text>第二页</Text>
                            </View>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon='search'
                            selected={this.state.selectedTabBarItem === 'third'}
                            onPress={() => this.setState({selectedTabBarItem:'third'})}
                        >
                            <View style={styles.commonViewStyle}>
                                <Text>第三页</Text>
                            </View>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon='downloads'
                            selected={this.state.selectedTabBarItem === 'fourth'}
                            onPress={() => this.setState({selectedTabBarItem:'fourth'})}
                        >
                            <View style={styles.commonViewStyle}>
                                <Text>第四页</Text>
                            </View>
                        </TabBarIOS.Item>
                    </TabBarIOS>
                </View>
            )
        }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc'
    },
    commonViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})