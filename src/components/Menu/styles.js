import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 0px;
  padding: 0 30px;
`;

export const Code = styled.View`

   
`;

export const QR = styled.Image`
    margin: 15px auto;
    height: 100px;
    width: 100px;
`;

export const Sub = styled.Text`
font-size: 12px;
    text-align: center;
    color: #fff;
`;

export const Bank = styled.Text`
    font-weight: bold;
`;

export const Nav = styled.View`    
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255,255,255,0.4);
`;

export const NavItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items:center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255,255,255,0.4);
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 30px;
`;

export const SignOutButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 13px;
`;