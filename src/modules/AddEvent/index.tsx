import React, { ReactElement, useEffect, useState } from 'react'
import {} from '../../components/ImgLoader'
import { Alert, Space, UploadProps } from 'antd'
import { Select, Col, InputNumber, Row, Slider, Input, Button, Upload, DatePicker, TimePicker, AutoComplete } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import 'react-phone-number-input/style.css'

import './index.less';
import '../Profile/index.less';
import MapsInput from './mapsInput'

const { Option } = Select
const { TextArea } = Input

const MultiSlider = (props: any) => {
  const { range } = props;
  if(range === true) return <Slider range {...props} />;
  else return <Slider range={false} {...props} />;
};

const SliderStepper = ({
  range = false,
  min = 1,
  max,
  onInput,
}: {
  range?: boolean,
  min?: number,
  max?: number,
  onInput?: (newValue: number | [number, number]) => {},
}) => {
  const [inputStart, setInputStart] = useState(min);
  const [inputEnd, setInputEnd] = useState(max);

  const onChange = (newValue: number | [number, number]) => {
    if (typeof newValue === "number") setInputEnd(newValue);
    else {
      setInputStart(newValue[0]);
      setInputEnd(newValue[1]);
    }

    if (onInput) onInput(newValue);
  };

  return (
    <Row className="slider-stepper" gutter={25} justify="center">
      {range ? (
        <Col span={5}>
          <InputNumber value={inputStart} disabled />
        </Col>
      ) : null}
      <Col flex="auto">
        <MultiSlider
          className="mx-0"
          range={range}
          min={min}
          max={max}
          tooltip={{ formatter: null }}
          onChange={onChange}
          value={range ? [inputStart, inputEnd] : inputEnd}
        />
      </Col>
      <Col span={5}>
        <InputNumber value={inputEnd} disabled />
      </Col>
    </Row>
  );
};

const props: UploadProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  beforeUpload: async (file) => await new Promise(resolve => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const img = document.createElement('img')
      img.src = reader.result as string
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0)
        ctx.fillStyle = 'red'
        ctx.textBaseline = 'middle'
        ctx.font = '33px Arial'
        ctx.fillText('Ant Design', 20, 20)
        canvas.toBlob(result => resolve(result as any))
      }
    }
  }),
  capture: undefined
}

interface SelecterProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  defaultOption: string | ReactElement;
  values: string[] | ReactElement[];
};

const Selecter = ({ defaultOption, values, ...props } : SelecterProps) => {
  return (
    <select {...props}>
      <option>{defaultOption}</option>
      {values.map(item => (
        <option key={item.toString()}>{item}</option>
      ))}
    </select> 
  )
};


const AddEvent = () => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value)
  }
  const sport_kinds = ['football', 'tennis', 'basketball'];

  const eventFields = [
    {
      label: 'Title',
      child: <Input type='text' placeholder='Title'/>,
    },
    {
      label: 'King of Sport',
      child: <Selecter className="selectdiv" defaultOption="Choose a king of sport..." values={sport_kinds} />,
    },
    {
      label: 'Num of People',
      child: <SliderStepper max={50} />,
    },
    {
      label: 'Age Interval',
      child: <SliderStepper range max={80} />,
    },
    {
      label: 'Time',
      child: (<div className="timeDiv">
      <DatePicker renderExtraFooter={() => 'extra footer'} format="DD-MM-YYYY  HH:mm" showTime />
    </div>),
    },
    {
      label: 'Location',
      child: <MapsInput />,
      // (<><Input type='text' placeholder='Title'/>
      // <SomeFunc />
      // <Soasdjfo/></>),
    },
    {
      label: 'Description',
      child: (<TextArea className="textarea_prop" maxLength={300} showCount onChange={onChange}>Some text about event...</TextArea>      ),
    },
    {
      label: 'Upload Image',
      child: (
        <div className="imageLoader"><Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      </div>),
    },
  ]

  return (
  <>
  <section className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__text">
            <h4>Add Event</h4>
            <div className="breadcrumb__links">
              <a href="./index.html">Home</a>
              <span>Add Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Breadcrumb Section End --> */}
  <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-2"> </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              {eventFields.map(event => (
                  <div className="row" key={event.label}>
                    <div className="col-md-6">
                      <label>{event.label}</label>
                    </div>
                    <div className="col-md-6">
                      {event.child}
                    </div>
                  </div>
                )
              )}
              <div className="col-md-12">
                <button type="submit" className="profile-edit-btn">Add Event</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
  )
}

// const mockVal = (str: string, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

// export const SomeFunc = () => {
//   const [address, setAddress] = React.useState("");

//   const handleSelect = async (value: any) => {
//     const results = await geocodeByAddress(value);
//     alert(results);
//   };

//   const [value, setValue] = useState('');
//   const [options, setOptions] = useState<{ value: string }[]>([]);

//   const onSearch = (searchText: string) => {
//     setOptions(
//       !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
//     );
//     console.log('onSelect', setOptions);
//   };

//   const onSelect = (data: string) => {
//     console.log('onSelect', data);
//   };

//   const onChange = (data: string) => {
//     setValue(data);
//   };

  
//   const [currentValue, setCurrentValue] = useState('')

//   return (
//     <div>
//       <PlacesAutocomplete
//         value={address}
//         onChange={setAddress}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions }: {getInputProps: any, suggestions: any }) => (
//           <div>
//             <AutoComplete
//               options={suggestions.map((suggestion: any) => ({label: suggestion.description}))}
//               style={{ width: 200 }}
//               onSelect={(value: any)=> {
//                   setCurrentValue(value),
//                   value.getInputProps()
//               }}
//               placeholder="Enter your text"
//             />
//             <input {...getInputProps({ placeholder: "Type address" })} />
//             <div className="autocomplete-dropdown-container">
//               {suggestions.map((suggestion: any) => {
//                 return (
//                   <div>
//                     {suggestion.description}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//   );
// }


// export function Soasdjfo() {
//   const [address, setAddress] = React.useState("");
//   const [coordinates, setCoordinates] = React.useState({
//     lat: null,
//     lng: null
//   });

//   const handleSelect = async (value: any) => {
//     console.log(value)
//     const results = await geocodeByAddress(value);
//     const latLng = await getLatLng(results[0]);
//     setAddress(value);
//   };

//   return (
//     <div>
//       <PlacesAutocomplete
//         value={address}
//         onChange={setAddress}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }: { getInputProps: any, suggestions: any, getSuggestionItemProps: any, loading: any} ) => (
//           <div>
//             <p>Latitude: {coordinates.lat}</p>
//             <p>Longitude: {coordinates.lng}</p>

//             <input {...getInputProps({ placeholder: "Type address" })} />

//             <div>
//               {suggestions.map((suggestion: any) => {
//                 return (
//                   <div {...getSuggestionItemProps(suggestion)}>
//                     {suggestion.description}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//   );
// }

export default AddEvent
