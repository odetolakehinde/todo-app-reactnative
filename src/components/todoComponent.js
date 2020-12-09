import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {colors} from '../theme';

function TodoComponent({task}) {
  const getIcon = (status) => {
    switch (status) {
      case 'done':
        return require('../icons/icons8-checkmark-128.png');
      case 'in-progress':
        return require('../icons/icons8-progress-indicator-100.png');
      case 'pending':
        return require('../icons/icons8-data-pending-30.png');
      default:
        return require('../icons/icons8-progress-indicator-100.png');
    }
  };
  return (
    <>
      <View style={styles.item}>
        <View style={styles.text}>
          <Text style={styles.name}>{task.name}</Text>
          <Text style={styles.time}>{task.due_date}</Text>
        </View>
        <Image style={styles.tinyIcon} source={getIcon(task.status)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: colors.greyLighter,
    padding: 20,
    borderColor: colors.greyLight,
    borderStyle: 'solid',
    borderWidth: 0.4,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
  },
  time: {
    fontSize: 12,
    marginHorizontal: 1,
  },
  text: {
    flexDirection: 'column',
  },
  tinyIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
});

export default TodoComponent;
