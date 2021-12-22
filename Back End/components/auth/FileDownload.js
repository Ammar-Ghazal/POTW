import React, { Component } from 'react'
import { View, Button, TextInput, Text, CheckBox} from 'react-native'
//import { FileSystem } from 'expo';
import * as firebase from 'firebase'
import * as FileSystem from 'expo-file-system';
import { WebView } from 'react-native-webview';
//import firestore from '@react-native-firebase/firestore';

//const dbh = firebase.firestore();
/*
const usersCollection = firestore().collection('problems');


*/

export class FileDownload extends Component {
    
    async downloadFile(){
        let fileUri = FileSystem.documentDirectory + 'myfile.html';
        console.log(fileUri)
        const uri = 'https://storage.googleapis.com/cemc-potw/POTW/2020-21/POTWC/Week03/POTWC-20-GS-PA-03-P.html'
        FileSystem.downloadAsync(uri, fileUri)
        //const {uri} = await FileSystem.downloadAsync(remoteUrl, localUrl)
        console.log('Finished downloading to ', fileUri)
    }
    render() {
        return (
            <View>
                <Button 
                onPress={this.downloadFile} 
                title="Hit here to download"/>
            </View>
          )
    }
}

export default FileDownload
