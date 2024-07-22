// ResumeWriterDetailsScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const ResumeWriterDetails = ({ route }) => {
    const { writerId } = route.params;

    // Use the writerId to fetch the details of the selected resume writer from your data source

    // Dummy data for demonstration
    const writerDetails = {
        id: writerId,
        name: 'John Doe',
        currentCompany: 'ABC Company',
        specialization: 'Software Engineering',
        experience: 5,
        rating: 4.5,
        reviews: 20,
    };

    return (
        <View>
            <Text>{writerDetails.name}</Text>
            <Text>{writerDetails.currentCompany}</Text>
            <Text>{writerDetails.specialization}</Text>
            <Text>{writerDetails.experience} years of experience</Text>
            <Text>Rating: {writerDetails.rating}</Text>
            <Text>Reviews: {writerDetails.reviews}</Text>
        </View>
    );
};

export default ResumeWriterDetails;
