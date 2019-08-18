import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'; 
//import QRCode from 'react-native-qrcode';

import { Container, Code, QR, Nav, NavItem, NavText, SignOutButton, SignOutButtonText, Bank, Sub } from './styles';

import qrCode from '~/assets/qr.png';

export default function Menu({ translateY }) {
    return(
        <Container  style={{
            opacity: translateY.interpolate({
              inputRange: [0, 200],
              outputRange: [0, 1],
            }),
          }}  >
            <Code>
                <QR source={qrCode} />                
                {/* <QRCode 
                    value="https://decadatech.com"
                    size={80} 
                    bgColor="#fff"
                    fgColor="#8b10ae"
                /> */}
            </Code>
            <Sub>Banco <Bank>000 - Nu Pagamentos S.A</Bank></Sub>
            <Sub>Agência 0000</Sub>
            <Sub>Conta 0000000-0</Sub>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem >
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem >
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem >
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
            </SignOutButton>
        </Container> 
    );
}