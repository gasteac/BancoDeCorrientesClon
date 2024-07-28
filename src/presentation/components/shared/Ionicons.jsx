import Icon from 'react-native-vector-icons/Ionicons';

export const Ionicons = ({ name, size = 30, color = "#000" }) => {
    return (
        <Icon name={name} size={size} color={color} />
    )
}