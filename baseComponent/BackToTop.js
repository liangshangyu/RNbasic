/*
* ListView 的吸顶效果
* Android 不支持
* DataBlob 中的sectionIds rowIds
* */
import React,{Component} from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,ListView} from 'react-native'
const car = require('../assets/backToTop')
export default class BackToTop extends Component {
    constructor () {
        //设置获取组和行的数据
        let getSectionData = (dataBlob,sectionID) => {
            return dataBlob[sectionID]
        }
        let getRowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID + ":" + rowID]
        }
        let dataSource = new ListView.DataSource({
            getSectionHeaderData:getSectionData,//获取组中的数据
            getRowData:getRowData,        //获取行的数据
            rowHasChanged:(r1,r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
        })
        super()
        this.state = {
            dataSource : dataSource
        }
    }
    componentDidMount () {
        this.loadData()
    }
    loadData () {
        let jsonData = car.data
        let dataBlob = {}
        let sectionIDs = []
        let rowIDs = []
        let cars = []
        for(var i=0;i<jsonData.length;i++){
            sectionIDs.push(i)
            dataBlob[i] = jsonData[i].title
            cars = jsonData[i].cars
            rowIDs[i] = []
            for(var j=0;j<cars.length;j++){
                rowIDs[i].push(j)
                dataBlob[i +':'+j] = cars[j]
            }
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        })
        /*jsonData.forEach((v,index)=> {
            return sectionIds.push(index)
                    dataBlob[index] = v.title
            cars = v.cars
            rowIds[index] = []

        })*/
    }
    renderRow (rowData) {
        //每一行的数据
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                    <Image style={styles.rowImage} source={{uri:rowData.url}}></Image>
                    <Text>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderSection (sectionData,sectionID) {
        //每组中的数据
        return (
            <View style={styles.headerStyles}>
                <Text>{sectionData}</Text>
            </View>
        )
    }
    render () {
        return (
            <View>
                <View style={styles.headerV}>
                    <Text>车</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSection}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerV:{
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    headerStyles:{
        backgroundColor:"#ccc",
        height:20
    },
    rowImage:{
        width:50,
        height:50,
    }
})