import React, { useEffect, useState } from 'react'
import {} from '../../components/ImgLoader'
import { Alert, UploadProps } from 'antd'
import { Select, Col, InputNumber, Row, Slider, Input, Button, Upload, DatePicker, TimePicker, AutoComplete } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import 'react-phone-number-input/style.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from 'react-places-autocomplete'

const { Option } = Select
const { TextArea } = Input

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1)
  const onChange = (newValue: any) => {
    setInputValue(newValue)
  }

  return (
  <Row>
    <Col span={17}>
    <Slider
      min={10}
      max={80}
      tooltip={{ formatter: null }} 
      onChange={onChange}
      value={typeof inputValue === 'number' ? inputValue : 0}
    />
    </Col>
    <Col span={7}>
    <InputNumber
      defaultValue={1}
      style={{ margin: '0 16px', color: 'black' }}
      value={inputValue}
      disabled
    />
    </Col>
  </Row>
  )
}

const IntegerStep2 = () => {
  const [inputValue, setInputValue] = useState([1, 2])
  const onChange = (newValue: any) => {
    setInputValue(newValue.toString().split(','))
  }

  return (
    <><Row>
        <Col span={4}>
          <InputNumber
            defaultValue={20}
            style={{ width: '55px', color: 'black'}}
            value={inputValue[0]}
            disabled />
        </Col>
        <Col span={17}>
          <Slider
            tooltip={{ formatter: null }} 
            min={1}
            max={80}
            range
            step={1}
            defaultValue={[20, 40]}
            onChange={onChange} />
        </Col>
        <Col span={3}>
          <InputNumber
            defaultValue={40}
            style={{ width: '55px', color: 'black'}}
            value={inputValue[1]}
            disabled />
        </Col>
      </Row></>
  )
}

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

const AddEvent = () => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value)
  }
  const [value, setValue] = useState<string>('')
  const Data = ['Choose a king of sport...', 'football', 'tennis', 'basketball']
  const MakeItem = (X: any) => <option>{X}</option>
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
              <div className="row">
                <div className="col-md-6">
                  <label>Title</label>
                </div>
                <div className="col-md-6">
                  <input className='form-control' type='text' placeholder='Title'/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>King of Sport</label>
                </div>
                <div className="col-md-6">
                    <select className="selectdiv">
                      {Data.map(MakeItem)}
                    </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Num of People</label>
                </div>
                <div className="col-md-6">
                  <div className="sliderdiv">
                    <IntegerStep />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Age Interval</label>
                </div>
                <div className="col-md-6">
                  <div className="sliderdiv">
                    <IntegerStep2 />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Time</label>
                </div>
                <div className="col-md-6">
                  <div className="timeDiv">
                    <DatePicker renderExtraFooter={() => 'extra footer'} format="DD-MM-YYYY  HH:mm" showTime />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Location</label>
                </div>
                <div className="col-md-6">
                  <input className='form-control' type='text' placeholder='Title'/>
                  <SomeFunc />
                  {/* <Soasdjfo/> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Description</label>
                </div>
                <div className="col-md-6" >
                  <TextArea className="textarea_prop" maxLength={300} showCount onChange={onChange}>Some text about event...</TextArea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Upload Image</label>
                </div>
                <div className="col-md-6">
                  <div className="imageLoader">
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </div>
                </div>
              </div>
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

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

export const SomeFunc = () => {
  const [address, setAddress] = React.useState("");

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    alert(results);
  };

  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
    console.log('onSelect', setOptions);
  };

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  
  const [currentValue, setCurrentValue] = useState('')

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions}) => (
          <div>
            <AutoComplete
              options={suggestions.map(suggestion => ({label: suggestion.description}))}
              style={{ width: 200 }}
              onSelect={(value: any)=> {
                  setCurrentValue(value),
                  value.getInputProps()
              }}
              placeholder="Enter your text"
            />
            <input {...getInputProps({ placeholder: "Type address" })} />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                return (
                  <div>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}


export function Soasdjfo() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async (value: any) => {
    console.log(value)
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {suggestions.map(suggestion => {
                return (
                  <div {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default AddEvent