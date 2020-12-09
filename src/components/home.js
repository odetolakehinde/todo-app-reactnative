import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';

import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../redux/actions';
import {colors} from '../theme';
import TodoComponent from './todoComponent';

function HomeComponent({tasks, all_tasks_completed, username}) {
  const renderItem = ({item}) => <TodoComponent task={item} />;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={styles.tinyIcon}
            source={require('../icons/icons8-menu-48.png')}
          />
          <Text style={styles.headerText}>{username}</Text>
          <Image
            style={styles.tinyIcon}
            source={require('../icons/icons8-topic-52.png')}
          />
        </View>
        <View style={styles.subheader}>
          <Text style={styles.subheaderText}>
            Hey, this is a real app, built as a test. Enjoy!
          </Text>
        </View>

        <View style={styles.top}>
          <Text style={styles.topText}>Tasks</Text>
        </View>

        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        {!all_tasks_completed && (
          <Text style={styles.footerText}>
            You have not completed all your tasks.
          </Text>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: colors.greyDark,
    alignItems: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
  },
  subheader: {
    paddingVertical: 10,
    backgroundColor: colors.greyLight,
    alignItems: 'center',
  },
  subheaderText: {
    fontSize: 15,
    color: 'white',
  },
  tinyIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
  top: {
    backgroundColor: colors.greyLighter,
    alignItems: 'flex-start',
    paddingVertical: 15,
  },
  topText: {
    color: 'black',
    marginLeft: 32,
    fontSize: 15,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    all_tasks_completed: state.all_tasks_completed,
    username: state.username,
  };
};

const mapDispatchToProps = {addTodo, deleteTodo};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
