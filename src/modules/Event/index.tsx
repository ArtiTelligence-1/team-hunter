import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Image, Avatar, Button, Form, Input, Comment, List, Tooltip, Tabs } from 'antd';
import moment from 'moment';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useGetEventByIdQuery, useLazyGetEventQuery, useAddCommentMutation } from '../../core/api/events';
import { useGetMeQuery } from '../../core/api/user';
import { Event } from '../../core/types/event';
import { Discussion } from '../../core/types/discussion';
import LoadingSpinner from '../../components/LoadingSpinner';

const { TextArea } = Input;

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

const EventComponent = () => {
  const { id } = useParams();
  const response = useGetEventByIdQuery(id ?? '');
  const event = response.data;
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const { data: pofileData, isLoading } = useGetMeQuery(null);
  const [addComment, result] = useAddCommentMutation();

  const [comments, setComments] = useState<any>([]);
  // useEffect(() => {
  if (!response.isLoading && (event?.discussion?.length ?? 0) > 0 && comments.length === 0) {
    setComments(event?.discussion.map((d: Discussion) => ({
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: d.sender.firstName,
      avatar: d.sender.photoUrl,
      content: (
        <p>{d.text}</p>
      ),
      datetime: (
        <Tooltip title={d.id.toString()}>
          <span>{moment(d.id).fromNow()}</span>
        </Tooltip>
      ),
    })));
  }
  // }, []);

  const containerStyle = {
    width: '100%',
    height: '200px',
  };

  const handleSubmit = () => {
    if (!value) return;

    const commentItem = {
      author: pofileData?.firstName,
      avatar: pofileData?.photoUrl,
      content: <p>{value}</p>,
      datetime: moment().fromNow(),
    };
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        commentItem,
      ]);
    }, 1000);
    addComment({ eventId: id ?? '', text: value }).catch(() => {});
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return response.isFetching ?
    <LoadingSpinner /> :
      (
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
                      height={500}
                      src={event?.posterUrl}
                    />
                  </div>
                </div>
                <div className="col-md-6" style={{ alignItems: 'center', display: 'flex' }}>
                  <div className="product__details__text">
                    <h4>{event?.title}</h4>
                    <h3>
                      {event?.participants.length}
                      /
                      {event?.participantsLimit}
                    </h3>
                    <p className="eventDescription">{event?.description}</p>
                    <div className="mapDisplay">
                      <LoadScript googleMapsApiKey="AIzaSyCV5zbKUfBZ-SwJ60oASNX-j2YiHMC0HG8">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={event!.location}
                          zoom={10}
                        >
                          <MarkerF position={event!.location} />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                    <p>{event?.location.label}</p>
                    <div className="product__details__cart__option">
                      <Link to="/" className="primary-btn">
                        Join
                      </Link>
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
                              A Pocket PC is a handheld computer, which features many of the
                              same a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product, the cost of a
                              Pocket PC $350.00, a new Pocket PC can now be purchased.
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
                          header={`${comments.length as number} replies`}
                          itemLayout="horizontal"
                          dataSource={comments}
                          renderItem={(item: any) => (
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
                        <Comment
                          avatar={<Avatar src={pofileData?.photoUrl} alt="Han Solo" />}
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

export default EventComponent;
