import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, View, Button, SectionList } from 'react-native';
const products = [
  { id: '1', name: 'Product A', price: '10.00' },
  { id: '2', name: 'Product B', price: '10.00' },
  { id: '3', name: 'Product C', price: '10.00' },
];

const groupedProducts = [
{ title: 'Category A', data: ['Product A1', 'Product A2','Product A3'] },
{ title: 'Category B', data: ['Product B1', 'Product B2'] },
{ title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3']},
  
];
export default function App() {
  return (
    <View>
      <Text style={styles.titleHeader}>Flat List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) =>
          <View style={styles.flatList}>
            <Text>{item.name} {item.price}</Text>
            <Button style={styles.btnItem}
              title={item.name}
              onPress={() => Alert.alert(item.name)}
            />
          </View>
        }
        keyExtractor={item => item.id}
      />
      <SectionList 
      sections={groupedProducts}
      keyExtractor={(item, index) => item + index}
      renderItem={({item, section}) => 
      (
        <View>
          <Text style={styles.sectionList}>{item}</Text>
          <Button style={styles.btnItem}
              title={item}
              onPress={() => Alert.alert(`Section: ${section.title}`)}
            />
        </View>
      )}
      renderSectionHeader={({section: {title}}) =>
    (
      <Text>
        {title}
      </Text>
    )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  titleHeader: {
    marginTop: 15,
    marginLeft: 20,
  },
  flatList: {
    margin: 20,
    backgroundColor: 'pink',
    padding: 10,
  },
  sectionList: {
    margin: 10,
    backgroundColor: 'pink',
  }

});
