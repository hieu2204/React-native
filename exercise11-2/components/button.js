import React from "react";
import { Button} from 'react-native';

const Custombtn = ({title, color, onPress}) => {
    return <Button
        title={title}
        color={color}
        onPress={onPress}
    />
};

export default Custombtn;