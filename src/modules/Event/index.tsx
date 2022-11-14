import React, { useEffect, useState } from 'react';
import { AboutBGSrcIcon, TestimonialAuthorSrcIcon } from '../../components/ImgLoader';
import { Avatar, Button, Form, Input, Comment, List, Tooltip, Tabs } from 'antd'
import Quote_BG from '../../static/img/about/quote_bg.jpg';
import moment from 'moment';

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
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
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
  const[comments, setComments] = useState<CommentItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

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
  return(
  <>
    <section className="shop-details">
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <a href="./index.html">Home</a>
                            <a href="./events.html">Events</a>
                            <span>Event Details</span>
                        </div>
                    </div>
                </div>
								<div style={{alignContent:'center'}}>
										<div className="tab-content">
												<div className="tab-pane active" id="tabs-1" role="tabpanel">
														<div className="product__details__pic__item">
																<div className="testimonial__pic set-bg" style={{ backgroundImage: `url(${Quote_BG})` }} />
														</div>
												</div>
										</div>
								</div>
						 </div>
					</div>
        	<div className="product__details__content" style={{ marginBottom: '20px'}}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>Hooded thermal anorak</h4>
                            <h3>2 / 10</h3>
                            <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                            with placket.</p>
                            <div className="product__details__btns__option">
                                <a href="#"><i className="fa fa-heart"></i> add to wishlist</a>
                            </div>
                            <div className="product__details__cart__option">
                                <a href="#" className="primary-btn">Join</a>
                            </div>
                        </div>
                    </div>
                </div>
								<div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__tab">
												<Tabs defaultActiveKey="1">
													<Tabs.TabPane tab="Additional information" key="1">
															<div className="product__details__tab__content" style={{ marginBottom: '100px'}}>
																	<p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
																	pharetras loremos.</p>
																	<div className="product__details__tab__content__item">
																			<h5>Products Infomation</h5>
																			<p>A Pocket PC is a handheld computer, which features many of the same
																			a touchscreen and touchpad.</p>
																			<p>As is the case with any new technology product, the cost of a Pocket PC
																			$350.00, a new Pocket PC can now be purchased.</p>
																	</div>
																	<div className="product__details__tab__content__item">
																			<h5>Material used</h5>
																			<p>Polyester is deemed lower quality due to its none natural quality’s. Made
																			worn all year round.</p>
																	</div>
															</div>
													</Tabs.TabPane>
													<Tabs.TabPane tab="Discussion" key="2">
														<List
															className="comment-list"
															header={`${data.length} replies`}
															itemLayout="horizontal"
															dataSource={data}
															renderItem={item => (
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
                              content={
                                <Editor
                                  onChange={handleChange}
                                  onSubmit={handleSubmit}
                                  submitting={submitting}
                                  value={value}
                                />
                              }
                            />
													</Tabs.TabPane>
												</Tabs>
                    </div>
								</div>
								</div>
						</div>
				</div>
    </section>
  </>
  )
}

export default Event;
