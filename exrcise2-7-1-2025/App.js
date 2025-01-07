// App.js
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NotificationItem from './Components/NotificationItem';

const notifications = [
  {
    id: '1',
    icon: 'check-circle', // Thay bằng tên icon từ FontAwesome
    title: 'Bước 1: Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
  },
  {
    id: '2',
    icon: 'group', // Thay bằng tên icon từ FontAwesome
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '3',
    icon: 'user', // Thay bằng tên icon từ FontAwesome
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '4',
    icon: 'exclamation-triangle', // Thay bằng tên icon từ FontAwesome
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
  },
];

const App = () => {
  return (
    <FlatList
      data={notifications}
      renderItem={({ item }) => <NotificationItem item={item} />} // Sử dụng component NotificationItem
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
