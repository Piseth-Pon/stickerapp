import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";
export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        require('../assets/images/emoji.png'),
        require('../assets/images/confused.png'),
        require('../assets/images/laughing.png'),
        require('../assets/images/party.png'),
        require('../assets/images/smile.png'),
        require('../assets/images/wink.png'),
    ]);

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
            data={emoji}
            contentContainerStyle={StyleSheet.listContainer}
            renderItem={({item, index}) => {
                return (
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}
                    >
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                );
            }}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});