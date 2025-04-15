import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // Gọi GET API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setUsers(res.data);
      setError('');
    } catch (err) {
      setError('Lỗi khi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  // Gọi POST API
  const addUser = async () => {
    if (!name.trim()) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên');
      return;
    }

    try {
      const res = await axios.post(API_URL, {
        name: name,
        username: name.toLowerCase().replace(/\s/g, ''),
      });
      setUsers([...users, res.data]);
      setName('');
      Alert.alert('Thành công', 'Đã thêm người dùng');
    } catch (err) {
      Alert.alert('Lỗi', 'Không thể thêm người dùng');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={({ item }) => <Text style={styles.user}>{item.name}</Text>}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Nhập tên người dùng mới"
        value={name}
        onChangeText={setName}
      />
      <Button title="Thêm người dùng" onPress={addUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  user: { fontSize: 18, marginVertical: 5 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 }
});
