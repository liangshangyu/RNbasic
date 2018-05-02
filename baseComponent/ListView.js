import React,{Component} from 'react'
import {Text,Image,ListView,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
const dataset = require('../assets/listViewDemo')
const width = Dimensions.get('window').width
const cols = 3
const cellWidth = 100
const  Lmargin = (width - cellWidth * cols) / (cols + 1)
export default class ListViewDemo extends Component {
    constructor() {
        //创建数据源
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2})
        super()
        this.state = {data:ds.cloneWithRows(dataset.data)}
    }
    renderRow (rowData,rowID,sectionID) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.innerView}>
                    <Image source={{uri:rowData.url}} style={styles.image}/>
                    <Text style={styles.desc}>{rowData.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render () {
        return (
            <View>
                <ListView
                    dataSource={this.state.data}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.ListViewStyle}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{

    },
    ListViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    image:{
        width:50,
        height:50
    },
    desc:{
        fontSize:12
    },
    innerView:{
        marginLeft:Lmargin,
        width:cellWidth,
        height:cellWidth,
        marginTop:15,
        alignItems:'center'
    }
})