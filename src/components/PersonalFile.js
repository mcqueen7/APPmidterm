import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PersonalFile = ({ personaldata,navigation }) => {

  return (
       <Box bgColor={"#FFF5DB"} w="100%" h="370px" alignItems={"center"} borderBottomLeftRadius={30} borderBottomRightRadius={30}>
        <Image mt={2} source={{uri:personaldata.headimg}} alt={`${personaldata.name}的照片`} size={"120px"}/>
        <Text fontSize={20} fontWeight={"bold"} mt={"2"}>{personaldata.name}</Text>
        <Text fontSize={16}>{personaldata.school}</Text>
        <HStack mt={2}>
            <Center mx={5} w="50px">
                <Text fontSize={12}>{personaldata.articleNum}</Text>
                <Text fontSize={12}>文章數</Text>
            </Center>
            <Center mx={5} w="50px">
                <Text fontSize={12}>{personaldata.commentNum}</Text>
                <Text fontSize={12}>留言數</Text>
            </Center>
            <Center mx={5} w="50px"> 
                <Text fontSize={12}>{personaldata.collectedNum}</Text>
                <Text fontSize={12}>被收藏數</Text>
            </Center>
        </HStack>
        <Button mt={2} w="360" bgColor={"#477CEA"} borderRadius={"20px"}>我的學習歷程</Button>
        <HStack mt={5}>
            <Center mx={7}>
                <MaterialCommunityIcons name="account-multiple-outline" size={25} />
               <Text>好友</Text>
            </Center>
            <Center mx={7}>
                <MaterialCommunityIcons name="account-group-outline" size={25} />
                <Text>社團</Text>
            </Center>
            <Center mx={7}>
            <MaterialCommunityIcons name="message-text-outline" size={25} />
                <Text>聊天室</Text>
            </Center>
            <Center mx={7}>
            <MaterialCommunityIcons name="gift-outline" size={25} />
                <Text>禮物</Text>
            </Center>
        </HStack>
       </Box>
  );
};

export default PersonalFile;


