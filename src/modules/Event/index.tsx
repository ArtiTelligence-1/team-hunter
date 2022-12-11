import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image, Avatar, Button, Form, Input, Comment, List, Tooltip, Tabs } from 'antd';
import moment from 'moment';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Quote_BG from '../../static/img/about/quote_bg.jpg';

const { TextArea } = Input;
const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>8 hours ago</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 10:22:33">
        <span>9 hours ago</span>
      </Tooltip>
    ),
  },
];

interface CommentItem {
  author: string
  avatar: string
  content: React.ReactNode
  datetime: string
}

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: () => void
  submitting: boolean
  value: string
}

const AnyReactComponent = (text: any) => <div>{text}</div>;

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const Event = () => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const containerStyle = {
    width: '500px',
    height: '200px',
  };

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  const handleSubmit = () => {
    if (!value) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment('2022-11-12').fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <section className="shop-details">
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Event Details</h4>
                <div className="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <a href="./events.html">Events</a>
                  <span>Event Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="product__details__content"
        style={{ marginBottom: '20px' }}
      >
        <div className="container">
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-md-6">
              <div style={{ alignContent: 'center' }}>
                <Image
                  width={600}
                  height={500}
                  src={Quote_BG}
                />
              </div>
            </div>
            <div className="col-md-6" style={{ alignItems: 'center', display: 'flex' }}>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="product__details__text">
                    <h4>Hooded thermal anorak</h4>
                    <h3>2 / 10</h3>
                    <p className="eventDescription">A Pocket PC is a handheld computer, which features many of the same a touchscreen and touchpad. As is the case with any new technology product, the cost of a Pocket PC $350.00, a new Pocket PC can now be purchased.</p>
                    <div className="mapDisplay">
                      <LoadScript googleMapsApiKey="AIzaSyCV5zbKUfBZ-SwJ60oASNX-j2YiHMC0HG8">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                          <MarkerF position={center} />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                    {/* <div className="product__details__btns__option">
                      <Link to="/">
                        <i className="fa fa-heart" />
                        add to wishlist
                      </Link>
                    </div> */}
                    <div className="product__details__cart__option">
                      <Link to="/" className="primary-btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product__details__tab">
                <Tabs defaultActiveKey="2">
                  {/* <Tabs.TabPane tab="Description" key="1">
                    <div
                      className="product__details__tab__content"
                      style={{ marginBottom: '100px' }}
                    >
                      <p className="note">
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos
                        pharetras loremos.
                      </p>
                      <div className="product__details__tab__content__item">
                        <h5>
                          Products Infomation
                        </h5>
                        <p>
                          A Pocket PC is a handheld computer, which features many of the same
                          a touchscreen and touchpad.
                        </p>
                        <p>
                          As is the case with any new technology product, the cost of a Pocket PC
                          $350.00, a new Pocket PC can now be purchased.
                        </p>
                      </div>
                      <div className="product__details__tab__content__item">
                        <h5>Material used</h5>
                        <p>
                          Polyester is deemed lower quality due to its
                          none natural quality’s. Made  worn all year round.
                        </p>
                      </div>
                    </div>
                  </Tabs.TabPane> */}
                  <Tabs.TabPane tab="Discussion" key="2">
                    <List
                      className="comment-list"
                      header={`${data.length} replies`}
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={(item) => (
                        <li>
                          <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                          />
                        </li>
                      )}
                    />
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                      content={(
                        <Editor
                          onChange={handleChange}
                          onSubmit={handleSubmit}
                          submitting={submitting}
                          value={value}
                        />
                      )}
                    />
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
