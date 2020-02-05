import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Slider from '@react-native-community/slider';
import {data} from './helper';

const Item = ({name, barcode, id}) => {
  return (
    <View style={{flex: 1, marginTop: 10, backgroundColor: '#e5e7eb', padding: 5, borderRadius: 6}}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{barcode}</Text>
      <Text style={{marginTop: 10, fontSize: 12}}>{name}</Text>
      <Text style={{marginTop: 10}}>{id}</Text>
    </View>
  );
}

const App = () => {
  const [sum, setSum] = useState('0');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.firstBlock}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Лучшие условия для получения денег!</Text>
            <Text style={{fontSize: 16, marginTop: 20, lineHeight: 22}}>
              Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий.
            </Text>
          </View>
          <View style={{flex: 1, width: '90%', alignSelf: 'center', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Калькулятор</Text>
            <TextInput
              style={{ padding: 5, height: 60, borderColor: '#e5e7eb', borderWidth: 2, width: '100%', marginTop: 10, fontWeight: 'bold' }}
              // onChangeText={text => setSum(text)}
              value={`${sum} ₽`}
              // editable={false}
            />
            <Slider
              style={{width: '100%', height: 40, marginTop: -22}}
              minimumValue={0}
              value={+sum}
              onValueChange={(val) => setSum(`${val}`)}
              maximumValue={100000}
              minimumTrackTintColor="#05c"
              maximumTrackTintColor="#e5e7eb"
              step={5000}
            />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => setSum(30000)}>
                <Text>30 000 ₽</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSum(50000)}>
                <Text>50 000 ₽</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSum(70000)}>
                <Text>70 000 ₽</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSum(100000)}>
                <Text>100 000 ₽</Text>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, marginTop: 30}}>
              <FlatList
                data={data}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={item => item.id}
              />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  firstBlock: {
    padding: 10,
    width: '90%',
    borderWidth: 2,
    borderColor: '#e5f0fb',
    marginLeft: '5%',
    marginTop: 20
  },
  engine: {
    position: 'absolute',
    right: 0,
  }
});

export default App;
