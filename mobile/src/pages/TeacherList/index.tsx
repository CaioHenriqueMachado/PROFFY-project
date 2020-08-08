import React from 'react';
import PageHeader from '../../components/PageHeader';
import { View } from 'react-native';



import styles from './styles';

function TeacherList(){
  return (
    <View style={styles.container} >
      <PageHeader title="Proffs Disponíveis"/>
    </View>
  )}

export default TeacherList;