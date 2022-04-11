import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable} from "native-base"
import { ImageBackground } from "react-native";


const GradeCompletion = ({comdata,navigation}) => {
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detail")}>
        <Center w="90px" h="60px" mt="50px" mx="5px" bgColor="#EEEEEE"  borderRadius={12}  shadow={9} >
            <HStack>
                <Image source={{uri: comdata.icon}} alt={comdata.title} size={25} />
                <VStack>
                    <Text fontSize={"10px"}>{comdata.title}</Text>
                    <Text fontSize={"10px"}>已完成:{comdata.completion}%</Text>
                </VStack>
            </HStack>
                
        </Center>
        </Pressable>
    );
};


export default GradeCompletion;