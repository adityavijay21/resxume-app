import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'; // Import Pagination from react-native-snap-carousel
import data from "./ResumeWriters/data/SliderImage";

export default function Slider() {
    const [greeting, setGreeting] = useState('');
    const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

    useEffect(() => {
        const getTimeOfDay = () => {
            const currentHour = new Date().getHours();
            if (currentHour < 12) {
                return 'Morning';
            } else if (currentHour < 18) {
                return 'Afternoon';
            } else {
                return 'Evening';
            }
        };

        setGreeting(`Good ${getTimeOfDay()},`);
    }, []);

    const handlePress = (link) => {
        const linkToOpen = link || 'https://youtube.com';
        Linking.openURL(linkToOpen);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.link)}>
            <View style={styles.slide}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{greeting}</Text>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={500}
                itemWidth={310}
                loop
                autoplay
                autoplayInterval={3000}
                lockScrollWhileSnapping
                inactiveSlideScale={1}
                slideStyle={{ marginLeft: 0 }}
                onSnapToItem={(index) => setActiveIndex(index)} // Update active index on snap
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.activeDot}
                inactiveDotStyle={styles.inactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 67,
        marginLeft: 20,
    },
    slide: {
        alignItems: 'center',
        height: 200,
        marginTop: 46,
    },
    title: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5, // Adjusted margin for better spacing
        width: 280, // Added width to enforce ellipsis
        textAlign: 'center', // Center-align text
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        width: 280, // Added width to enforce ellipsis
        textAlign: 'center', // Center-align text
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black', // Black color for active dot
        marginHorizontal: 8,
    },
    inactiveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'darkgrey', // Dark grey color for inactive dot
        marginHorizontal: 8,
    },
});
