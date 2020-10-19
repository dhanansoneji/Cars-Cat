import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FontSizes, Colors, Layout} from '_theme';
import {Icon} from 'react-native-elements';

function CatDetails({onEditPress, onDeletePress, style, data, number}) {
  return (
    <View style={[Styles.buttonView, style]}>
      <View style={Styles.topView}>
        <View style={Styles.circle}>
          <Text style={Styles.catId}>{number}</Text>
        </View>
        <View style={Styles.rectangle}>
          <Text style={Styles.catName}>{data.cat_name.toUpperCase()}</Text>
        </View>
        <View style={Styles.triangle} />
      </View>
      <View style={Styles.middleView}>
        <View style={Styles.rowView}>
          <View style={Styles.groupView}>
            <View style={Styles.viewBG}>
              <Text style={Styles.textBG}>BREED</Text>
            </View>
            <View style={Styles.viewBorder}>
              <Text style={Styles.textData}>
                {data.cat_breed.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={Styles.groupView}>
            <View style={Styles.viewBG}>
              <Text style={Styles.textBG}>COLOR</Text>
            </View>
            <View style={Styles.viewBorder}>
              <Text style={Styles.textData}>
                {data.cat_color.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.rowView1}>
          <View style={Styles.groupView}>
            <View style={Styles.viewBG}>
              <Text style={Styles.textBG}>AGE</Text>
            </View>
            <View style={Styles.viewBorder}>
              <Text style={Styles.textData}>{data.cat_age.toUpperCase()}</Text>
            </View>
          </View>
          <View style={Styles.groupView}>
            <View style={Styles.viewBG}>
              <Text style={Styles.textBG}>SEX</Text>
            </View>
            <View style={Styles.viewBorder}>
              <Text style={Styles.textData}>{data.cat_sex.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={Styles.circle}
          onPress={onEditPress}>
          <View>
            <Icon name="edit" type="material" size={24} color={Colors.RED} />
          </View>
        </TouchableOpacity>
        <View style={Styles.rectangle1} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={Styles.circle}
          onPress={onDeletePress}>
          <View>
            <Icon name="delete" type="material" size={24} color={Colors.RED} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  buttonView: {
    alignSelf: 'center',
    width: Layout.SCREEN_WIDTH * 0.95,
    // backgroundColor: Colors.LIGHT_RED,
    backgroundColor: Colors.WHITE,
    // borderWidth: 0.5,
    marginTop: 50,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  topView: {
    top: -25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  catId: {
    color: Colors.RED,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: FontSizes.FONT_SIZE_LARGE,
  },
  catName: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: FontSizes.FONT_SIZE_LARGE,
    left: 30,
  },
  middleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  rowView1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  groupView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBG: {
    backgroundColor: Colors.RED,
    color: Colors.WHITE,
    width: 60,
    height: 20,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    bottom: -10,
    zIndex: 1,
  },
  viewBorder: {
    color: Colors.WHITE,
    borderWidth: 0.5,
    width: Layout.SCREEN_WIDTH * 0.43,
    height: 40,
    borderColor: Colors.RED,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textBG: {
    color: Colors.WHITE,
    fontStyle: 'italic',
    fontSize: FontSizes.FONT_SIZE_EXTRA_SMALL,
  },
  textData: {
    color: Colors.RED,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 3,
    fontSize: FontSizes.FONT_SIZE_DEFAULT,
  },
  bottomView: {
    bottom: -25,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 7,
    borderColor: Colors.RED,
    backgroundColor: Colors.WHITE,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    paddingRight: 60,
    height: 40,
    backgroundColor: Colors.RED,
    left: -25,
    justifyContent: 'center',
  },
  rectangle1: {
    width: 25 * 2,
    height: 5,
    backgroundColor: Colors.RED,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.RED,
    transform: [{rotate: '90deg'}],
    left: -25,
  },
});

export default CatDetails;
