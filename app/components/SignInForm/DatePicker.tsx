import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class MyDatePicker extends Component {
  @observable date = new Date();

  changeDate = (date: any) => {
    this.date = date;
  };

  render() {
    return (
      <DatePicker
        style={{width: '100%'}}
        date={this.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2021-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: {
            //marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date: any) => this.changeDate(date)}
      />
    );
  }
}

// import React, {useState} from 'react';
// import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export const DatePicker = () => {
//   let x: any = moment(new Date()).format('DD-MM-YYYY');
//   const [date, setDate] = useState(x);
//   const [mode, setMode]: any = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event: any, selectedDate: any) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = (currentMode: any) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View style={{width: 120, height: 40}}>
//       <View>
//         <Button onPress={showDatepicker} title={date.toString()} />
//       </View>
//       {/* <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View> */}
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };
