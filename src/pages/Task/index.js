import React, { useState, useEffect } from "react"
import {
    SafeareaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native"

import database from '../../config/firebaseconfig'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'

export default function Task({ navigation }){
    const [task, setTask] = useState([])

    function deleteTask(id){
        database.collection("Tasks").doc(id).delete()
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list);
        })
    }, [])
    return(
        <View>
            <Text>Page Tasks</Text>
        </View>
    )
}
