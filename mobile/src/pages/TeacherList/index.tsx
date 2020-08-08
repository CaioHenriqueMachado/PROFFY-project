import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons';


import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';


function TeacherList(){
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => {
          return teacher.id;
        })
  
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToogleFilterVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFilterSubmit(){
    loadFavorites();
    const response =  await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

  setIsFilterVisible(false);
  setTeachers(response.data);
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
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor='#C1BCCC'
                    value={week_day}
                    onChangeText={text => setWeek_day(text)}
                  />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Qual o horário?"
                    placeholderTextColor='#C1BCCC'
                    value={time}
                    onChangeText={text => setTime(text)} 
                  />
              </View>
            </View>
            <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
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
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />)
        })}
      </ScrollView>
      
    </View>
  )}

export default TeacherList;