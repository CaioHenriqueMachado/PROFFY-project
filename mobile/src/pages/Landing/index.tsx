import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/Landing.png';
import studyIcon from '../../assets/images/study.png';
import giveClassesIcon from '../../assets/images/give-classes.png';
import heartIcon from '../../assets/images/heart.png';


function Landing(){
    return (
      <View style={styles.container}>
        <Image source={landingImg} style={styles.banner}/>
        <Text style={styles.title}>
          Seja bem-vindo,{'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
            <Image source={studyIcon}/>
            <Text style={styles.buttonText}>Estudar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
            <Image source={giveClassesIcon}/>
            <Text style={styles.buttonText}>Dar Aulas</Text>
          </TouchableOpacity>
        </View>

        <Text style={totalConnections}>
          Total de 294 conexões já realizadas {' '}
          <Image source={heartIcon} />
        </Text>
      </View>
    );
}


export default Landing;