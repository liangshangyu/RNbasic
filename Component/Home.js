import React,{Component} from 'react'
import {Text,View,StyleSheet,ListView,Image,TouchableOpacity} from 'react-native'
const url = ''
const key_word = ''
export default class Home extends Component {
        constructor() {
            super()
            this.state = {
                //cell数据源
                dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
                //listView头部数据源
                headerData:[]
            }
        }
        componentDidMount () {
            //请求网络数据
            this.getDataFromNet()
        }
    getDataFromNet () {
            //使用fetch进行网络请求
        fetch(url)
            .then(response => response.json())
            .then(res => {
              console.log(res);
              //拿到需要数据
                let jsonData = res[key_word]
                for(var i=0;i<jsonData.length;i++){
                    let data = jsonData[i]
                    if(data.hasAD === 1){

                    }else {

                    }
                }
            })
            .catch((error)=>{

            })
    }　
    renderRow (rowData) {
            //单独的一个cell
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={}>
                    <View style={styles.cellStyle}>
                        {/*左边*/}
                        <Imgae source={{uri:rowData.imgsrc}}></Imgae>
                        {/*右边*/}
                        <View style={styles.rightViewStyle}>
                            <Text>{rowData.title}</Text>
                            <Text>{rowData.digset}</Text>
                            <Text>{rowData.replyCount}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
    }
    /*头部*/
    renderHeader () {
        if(this.state.headerData.length === 0) return
          return (
              <View>
                  <Text>头部滚动组件</Text>
              </View>
          )
    }
        render () {
            return (
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow = {this.renderRow}
                  renderHeader={this.renderHeader}
              />
            )
        }
}
const styles = StyleSheet.create({
    container:{},
    cellStyle:{
        flexDirection:'row',
        padding:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:0.5
    },
    rightViewStyle:{
        width:220,
        marginLeft:5
    }
})