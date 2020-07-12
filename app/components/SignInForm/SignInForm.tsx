import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  CheckBox,
  ScrollView,
} from 'react-native';
import {
  SignInFormContainer,
  SignInFormElements,
  EnterYourAddress,
  TextAddress,
  TextArea,
  TermsAndConditions,
  TermsData,
  SignUp,
} from './styledComponent';
import InputComponent from '../../InputComponent';
import RadioForm from 'react-native-simple-radio-button';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {ColorPicker} from 'react-native-color-picker';
import LinearGradient from 'react-native-linear-gradient';
import MyDatePicker from './DatePicker';
//import {Slider} from 'react-native-elements';

const radio_props = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Other', value: 1},
];

@observer
class SignInForm extends Component {
  @observable isSelectedCheckbox: boolean = false;
  @observable color1: any = 'dodgerblue';
  @observable color2: any = '#cc00ff';

  firstColor = (color: any) => {
    this.color1 = color;
  };

  secondColor = (color: any) => {
    this.color2 = color;
  };
  render() {
    return (
      <LinearGradient
        colors={[this.color1, this.color2]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <ScrollView>
          <SignInFormContainer>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.selectFavouriteColor}>
                select your favourite color
              </Text>
              <View>
                <ColorPicker
                  onColorSelected={color => {
                    this.firstColor(color);
                  }}
                  style={{width: 30, height: 30}}
                  hideSliders={true}
                />
              </View>
              <ColorPicker
                onColorSelected={color => {
                  this.secondColor(color);
                }}
                style={{width: 30, height: 30}}
                hideSliders={true}
              />
            </View>
            <SignInFormElements>
              <View>
                <View style={{paddingBottom: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Sign Up
                  </Text>
                  <View style={styles.HairLineWidth}>
                    <Text style={styles.PleaseFillForm}>
                      Please fill in this form to create an account
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <InputComponent
                    placeholder="First Name"
                    styles={{
                      height: 40,
                      width: '45%',
                    }}
                  />
                  <InputComponent
                    placeholder="Last Name"
                    styles={{
                      height: 40,
                      width: '45%',
                    }}
                  />
                </View>
                <View>
                  <InputComponent
                    placeholder="Mobile Number"
                    styles={{
                      height: 40,
                    }}
                  />
                  <InputComponent
                    placeholder="Email"
                    styles={{
                      height: 40,
                    }}
                  />
                  <InputComponent
                    placeholder="Password"
                    styles={{
                      height: 40,
                    }}
                  />
                  <InputComponent
                    placeholder="Confirm Password"
                    styles={{
                      height: 40,
                    }}
                  />
                </View>
                <View>
                  <View>
                    <Text style={styles.SelectYourGender}>
                      Select your gender
                    </Text>
                  </View>
                  <View>
                    <RadioForm
                      buttonSize={8}
                      formHorizontal={true}
                      radio_props={radio_props}
                      initial={0}
                      style={styles.RadioButton}
                      onPress={value => {
                        console.log(value);
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.SelectYourBranch}>
                    <View>
                      <Text style={{color: 'gray', marginTop: 10}}>
                        Select your branch
                      </Text>
                    </View>
                    <View style={{borderWidth: 1, borderColor: 'lightgray'}}>
                      <Picker
                        // selectedValue={selectedValue}
                        style={{
                          height: 40,
                          width: 150,
                        }}
                        // onValueChange={(itemValue, itemIndex) =>
                        //   setSelectedValue(itemValue)
                      >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                    </View>
                  </View>
                  <View>
                    <View>
                      <Text style={{color: 'gray', marginTop: 10}}>
                        Select your DOB
                      </Text>
                    </View>
                    <View>
                      <MyDatePicker />
                    </View>
                  </View>
                </View>

                <EnterYourAddress>
                  <TextAddress>Enter your address</TextAddress>
                  <TextArea
                    multiline={true}
                    style={{textAlignVertical: 'top'}}
                  />
                </EnterYourAddress>
                <View>
                  {/* <Slider
                    onSlidingStart={0}
                    onSlidingComplete={100}
                    // value={this.state.value}
                    // onValueChange={value => this.setState({value})}
                  /> */}
                </View>

                <TermsAndConditions>
                  <View>
                    <CheckBox
                      value={this.isSelectedCheckbox}
                      onValueChange={() => {
                        this.isSelectedCheckbox === true
                          ? (this.isSelectedCheckbox = false)
                          : (this.isSelectedCheckbox = true);
                      }}
                    />
                  </View>

                  <TermsData style={{color: 'gray'}}>
                    I accept the
                    <Text style={{color: 'dodgerblue'}}>
                      Terms of Use&nbsp;
                      <Text style={{color: 'gray'}}>
                        &{' '}
                        <Text style={{color: 'dodgerblue'}}>
                          Privacy Policy
                        </Text>
                      </Text>
                    </Text>
                  </TermsData>
                </TermsAndConditions>
                <View>
                  <SignUp title="SignUp" onPress={() => console.log('SignUp')}>
                    SignUp
                  </SignUp>
                </View>
              </View>
            </SignInFormElements>
          </SignInFormContainer>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  selectFavouriteColor: {
    color: 'white',
    textAlign: 'center',
  },
  PleaseFillForm: {
    color: 'gray',
    fontSize: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  SelectYourGender: {
    color: 'gray',
    fontSize: 13,
    paddingBottom: 10,
  },
  SelectYourBranch: {
    color: 'gray',
    fontSize: 13,
    width: 150,
  },
  HairLineWidth: {
    paddingBottom: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  RadioButton: {
    justifyContent: 'space-between',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default SignInForm;
