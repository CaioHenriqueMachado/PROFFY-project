import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList(){
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  function handleToogleFilterVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  return (
    <View style={styles.container} >
      <PageHeader 
        title="Proffs Disponíveis" 
          headerRight={(
            <BorderlessButton onPress={handleToogleFilterVisible}>
              <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
          )}
        >
        { isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput 
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor='#C1BCCC'
                  />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Qual o horário?"
                    placeholderTextColor='#C1BCCC'
                  />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
      
    </View>
  )}

export default TeacherList;