import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";

import database from '../../config/firebaseconfig';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function Task({ navigation }){
    const [task, setTask] = useState([]);

    function deleteTask(id) {
        database.collection("Tasks").doc(id).delete();
    }

    function deleteTask(id){
        database.collection("Tasks").doc(id).delete();
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list);
        })
    }, []);
    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={( item ) => {
                return(
                <View style={styles.Tasks}>
                    <TouchableOpacity
                        style={styles.deleteTask}
                        onPress={() => {
                            deleteTask(item.item.id)
                        }}
                    >
                    <FontAwesome
                        name="trash"
                        siza={45}
                        color="#F92e6a"
                    >                        
                    </FontAwesome>
                    </TouchableOpacity>
                    <Text
                        style={styles.DescriptionTask}
                        onPress={()=>
                            navigation.navigate("Details",{
                                id: item.item.id,
                                description: item.item.description
                            })
                        }
                    >
                    { item.item.description }
                    </Text>                   
                </View>
                )
            }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
                >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
